from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sqlmodel import Session
from db import engine
from models import Todo

app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello_world():
    return {"message": "OK"}


@app.get("/alive")
def hello_world():
    return {"message": "OK"}

@app.post("/api/v1/add-todo")
def add_todo(todo: Todo):
    print('Adding todo', todo)

    with Session(engine) as session:
        session.add(todo)
        session.commit()

    return {"message": "OK"}


@app.get("/api/v1/get-all-todos")
def get_all_todos():
    with Session(engine) as session:
        todos = session.query(Todo).all()

    return todos


@app.delete("/api/v1/delete-todo/{todo_id}")
def delete_todo_by_id(todo_id: int):
    with Session(engine) as session:
        todo = session.get(Todo, todo_id)
        session.delete(todo)
        session.commit()

    return {"message": "OK"}