from config.bdd_conf import *
from config.api.sncf import *

import os
from dotenv import load_dotenv

load_dotenv()
ApiKey = os.getenv('ApiKey')

def insertMontParnasseToMongo():
    # appel la bdd "SNCF" pour faire les traitements vers la base mongo
    getDataQuery = departMontparnasse(ApiKey,10)
    # connection mongoDB
    DBMongo = loadConfigDataBase()
    # insert des données
    DBMongo.MontParnasse.insert_one(getDataQuery)

if __name__ == '__main__':
    insertMontParnasseToMongo()