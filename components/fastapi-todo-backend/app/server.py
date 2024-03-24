import uvicorn
from db import create_db_and_tables
import os

if __name__ == "__main__":
    create_db_and_tables()
    port = int(os.environ.get('PORT', 8000))

    uvicorn.run("app:app", host="0.0.0.0", port=port, reload=True)