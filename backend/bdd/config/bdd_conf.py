import os
import pymongo
from dotenv import load_dotenv

load_dotenv()

def loadConfig():
    MongoKey = os.getenv('MongoKey')
    MongoPass = os.getenv('MongoPass')
    DATABASE_URL  = f'mongodb+srv://{MongoKey}:{MongoPass}@cluster0.vb5hrnc.mongodb.net/?retryWrites=true&w=majority'

    client=pymongo.MongoClient(DATABASE_URL)
    db = client['sncf']
    return db

if __name__ == '__main__':
    loadConfig()