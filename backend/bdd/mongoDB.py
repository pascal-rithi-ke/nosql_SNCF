import os
from config.bdd_conf import *
from config.api.sncf import *
from dotenv import load_dotenv

load_dotenv()

ApiKey = os.getenv('ApiKey')
CheckCollection = loadConfigDataBase()

CollecMontParnasse = "MontParnasse"
CollecObjectTrouve = "object_trouve"
CollecTer = "ter"
CollectTGV = "tgv"

def insertMontParnasseToMongo():
    # appel la bdd "SNCF" pour faire les traitements vers la base mongo
    getDataQuery = departMontparnasse(ApiKey)
    # connection mongoDB
    DBMongo = loadConfigDataBase()
    # insert des données
    DBMongo[CollecMontParnasse].insert_many(getDataQuery['departures'])

def insertObjetTrouveToMongo():
    getDataQuery = objetTrouve(ApiKey)
    DBMongo = loadConfigDataBase()
    DBMongo[CollecObjectTrouve].insert_many(getDataQuery['records'])

def insertTerMensuelToMongo():
    getDataQuery = terMensuel(ApiKey)
    DBMongo = loadConfigDataBase()
    DBMongo[CollecTer].insert_many(getDataQuery['records'])

def insertTGVMensuelToMongo():
    getDataQuery = TGVMensuel(ApiKey)
    DBMongo = loadConfigDataBase()
    DBMongo[CollectTGV].insert_many(getDataQuery['records'])

# vérifie si les collections sont vides sinon les ajoutent dans le cluster Atlas
if __name__ == '__main__':
    existMontParnasse = CheckCollection[CollecMontParnasse].count_documents({})
    if existMontParnasse == 0:
        insertMontParnasseToMongo()

    existObjTrouve = CheckCollection[CollecObjectTrouve].count_documents({})
    if existObjTrouve == 0:
        insertObjetTrouveToMongo()

    existTer = CheckCollection[CollecTer].count_documents({})
    if existTer == 0:
        insertTerMensuelToMongo()

    existTgv = CheckCollection[CollectTGV].count_documents({})
    if existTgv == 0:
        insertTGVMensuelToMongo()