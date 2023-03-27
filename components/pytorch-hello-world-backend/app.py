from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from torchvision import transforms
import threading
from PIL import Image
from io import BytesIO
import os
import base64
import time

from models.custom_model import CustomModel
from models.mobilenet_model import MobileNetModel
from models.training import start_training

from utils.locks import training_lock

model_dict = {
    'custom': CustomModel(),
    'mobilenet': MobileNetModel()
}
trained_models = {
    'custom': "trained-models/trained_custom.pt",
    'mobilenet': "trained-models/trained_mobilenet.pt"
}

# Read the allowed origin from the environment variable
allowed_origin = os.environ.get("ALLOWED_ORIGIN", "http://localhost")

app = Flask(__name__)
if os.environ.get("DEBUG").lower() == 'true':
    app.debug = True

CORS(app, resources={r"/*": {"origins": allowed_origin}})


@app.route('/predict', methods=['POST'])
def predict():
    start_time = time.time()
    json_data = request.get_json()
    image_data = json_data['image']
    image_data = base64.b64decode(image_data)
    image = Image.open(BytesIO(image_data)).convert('RGB')

    model_name = json_data.get('model', 'mobilenet')
    # Validate the model name
    if model_name not in model_dict:
        return jsonify({'error': 'Invalid model name'}), 400

    model = model_dict[model_name]
    load_model(model, trained_models[model_name])

    preprocess = transforms.Compose([
        transforms.Resize(32),
        transforms.CenterCrop(32),
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])
    image_tensor = preprocess(image)

    prediction = model.predict(image_tensor)
    elapsed_time = time.time() - start_time
    return jsonify({'prediction': prediction, 'time': elapsed_time})


@app.route('/start-training', methods=['POST'])
def start_training_route():
    if training_lock.locked():
        return jsonify({'status': 'failed', 'message': 'Training already in progress'})

    # Get the number of epochs from the request JSON
    json_data = request.get_json()
    epochs = json_data.get('epochs', 5)
    model_type = json_data.get('model', 'mobilenet')

    # Start training in a separate thread
    try:
        training_thread = threading.Thread(target=start_training, args=(epochs,model_type))
        training_thread.start()
        return jsonify({'status': 'success', 'message': 'Training started'})
    except ValueError as e:
        return jsonify({'status': 'failed', 'message': str(e)})


@app.route('/check-training-status', methods=['GET'])
def check_training_status():
    status = 'finished' if not training_lock.locked() else 'in progress'
    return jsonify({'status': status})


def load_model(model_instance, model_path):
    if os.path.exists(model_path):
        model_instance.load_trained_model(model_path)
        print(f"Loaded model from {model_path}")
    else:
        print(f"Model file not found: {model_path}")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
