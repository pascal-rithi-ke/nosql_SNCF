import pymongo
import json
import os
from bdd.config.bdd_conf import *

from flask import Flask, jsonify
from bson import json_util
from flask_cors import CORS

from dotenv import load_dotenv

load_dotenv()
ApiKey = os.getenv('ApiKey')
CheckCollection = loadConfigDataBase()

app = Flask(__name__)
CORS(app)

# Utiliser "flask run" pour lancer le serveur


@app.route("/obj_max")
def objetTrouveMax():
    arr = []
    results = CheckCollection.objet_trouve.aggregate([
        {
            "$group": {
                "_id": "$fields.gc_obo_type_c",
                "count": {"$sum": 1}
            }
        },
        {
            "$sort": {"count": -1}
        },
        {
            "$limit": 50
        }
    ])
    for result in results:
        arr.append(
            {'_id': result["_id"], 'count': result['count']})
    conversion = json.loads(json_util.dumps(arr))
    response = jsonify({'results': conversion})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/obj_perdu")
def objTrouve():
    arr = []
    resultats = list(CheckCollection.objet_trouve.aggregate([
        {
            "$project": {
                "heure": {"$hour": {"$dateFromString": {"dateString": "$fields.date"}}},
                "nb": 1
            }
        },
        {
            "$group": {
                "_id": {
                    "$cond": [
                        {"$and": [
                            {"$gte": ["$heure", 5]},
                            {"$lt": ["$heure", 13]}
                        ]},
                        "matin",
                        "apres-midi"
                    ]
                },
                "nb_objets_trouves": {"$sum": 1}
            }
        }
    ]))
    for resultat in resultats:
        arr.append(
            {'_id': resultat['_id'], 'nb_objets_trouves': resultat['nb_objets_trouves']})
    conv = json.loads(json_util.dumps(arr))
    response = jsonify({'results': conv})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/obj_recup")
def obj_recup():
    Recup = []
    resultatRecup = CheckCollection.objet_trouve.aggregate(
        [
            {"$match": {"fields.gc_obo_date_heure_restitution_c": {"$ne": ""}}},
            {"$group":
             {
                 "_id": "$fields.gc_obo_type_c",
                 "count": {"$sum": 1}
             }
             },
            {"$sort": {"count": -1}}
        ])
    for index, AllRecup in enumerate(resultatRecup):
        Recup.append(
            {'id_type': index, 'name': AllRecup['_id'], 'nb': AllRecup['count']})
    convRecup = json.loads(json_util.dumps(Recup))

    noRecup = []
    resultatNoRecup = CheckCollection.objet_trouve.aggregate(
        [
            {"$match": {'fields.gc_obo_date_heure_restitution_c': {'$exists': False}}},
            {"$group":
             {
                 "_id": "$fields.gc_obo_type_c",
                 "count": {"$sum": 1}
             }
             },
            {"$sort": {"count": -1}}
        ])

    for index, AllnoRecup in enumerate(resultatNoRecup):
        noRecup.append(
            {'id_type': index, 'name': AllnoRecup['_id'], 'nb': AllnoRecup['count']})
    convNoRecup = json.loads(json_util.dumps(noRecup))

    response = jsonify({'convRecup': convRecup}, {'noRecup': convNoRecup})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/obj_par_gare")
def objetTrouveParGare():
    arr = []
    results = list(CheckCollection.objet_trouve.aggregate([
        {"$group": {"_id": "$fields.gc_obo_gare_origine_r_name", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 5}
    ]))
    for result in results:
        arr.append(
            {'_id': result["_id"], 'count': result['count']})
    conversion = json.loads(json_util.dumps(arr))
    response = jsonify({'results': conversion})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    app.run()
