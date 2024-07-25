from sqlmodel import SQLModel, create_engine
from models import *
import os

DATABASE_URL = os.environ.get("DATABASE_URL")

engine = create_engine(DATABASE_URL)


def create_db_and_tables():
    print('Creating database and tables')
    SQLModel.metadata.create_all(engine)