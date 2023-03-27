FROM bitnami/pytorch:1.11.0

USER 0
RUN mkdir /.cache && chmod 777 /.cache

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
