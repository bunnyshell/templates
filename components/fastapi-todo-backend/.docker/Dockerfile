FROM python:3

WORKDIR /app

COPY requirements.txt ./
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt

COPY ./app ./app

ENTRYPOINT [ "python", "app/server.py" ]