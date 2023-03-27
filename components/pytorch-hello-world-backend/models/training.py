import torch
from models.custom_model import CustomModel
from models.mobilenet_model import MobileNetModel

from utils.locks import training_lock


class InvalidModelTypeError(Exception):
    pass


def start_training(epochs=5, model_type='mobilenet'):
    with training_lock:
        if model_type == 'mobilenet':
            model = MobileNetModel()
            model_path = 'trained-models/trained_mobilenet.pt'
        elif model_type == 'custom':
            model = CustomModel()
            model_path = 'trained-models/trained_custom.pt'
        else:
            raise InvalidModelTypeError(f"Invalid model type: {model_type}")

        model.train(epochs=epochs)

        # Save the trained model
        torch.save(model.model.state_dict(), model_path)
