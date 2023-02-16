import requests
from flask import jsonify
from rich import print
from pprint import pprint as pp
from pymongo import MongoClient

import pymysql.cursors
import json
import pymongo
import pandas as pd

client = MongoClient("mongodb+srv://allan:xq9iRdwwXXPRJqaJ@cluster0.vb5hrnc.mongodb.net/?retryWrites=true&w=majority")
db = client['sncf']

api_key = "e59fd49f-550a-4086-a79c-6cdbcdcc8560"

def departMontparnasse(api_key, count):

    url = "https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87391003/departures"

    params = {
    "count": count,    # nombre de résultats à afficher
    "disable_geojson": "true",    # désactiver la géolocalisation
    "key": api_key   # votre clé API SNCF
    }

    headers = {
    "Accept": "application/json"    # spécifier l'en-tête "Accept" pour recevoir les données au format JSON
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        '''for departure in data["departures"]:
            print(departure["display_informations"]["direction"])'''
        return print(data['departures'])
        #db.test.insert_one(data)
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None

def objetTrouve(api_key, count):

    url = "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&rows=-1&sort=date"

    params = {
    "count": count,    # nombre de résultats à afficher
    "disable_geojson": "true",    # désactiver la géolocalisation
    "key": api_key   # votre clé API SNCF
    }

    headers = {
    "Accept": "application/json"    # spécifier l'en-tête "Accept" pour recevoir les données au format JSON
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        '''for departure in data["departures"]:
            print(departure["display_informations"]["direction"])'''
        return print(data)
        #db.test.insert_one(data)
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None

def terMensuel(api_key, count):

    url = "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-ter&q=&sort=date&facet=date&facet=region"

    params = {
    "count": count,    # nombre de résultats à afficher
    "disable_geojson": "true",    # désactiver la géolocalisation
    "key": api_key   # votre clé API SNCF
    }

    headers = {
    "Accept": "application/json"    # spécifier l'en-tête "Accept" pour recevoir les données au format JSON
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        '''for departure in data["departures"]:
            print(departure["display_informations"]["direction"])'''
        return print(data)
        #db.test.insert_one(data)
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None

def TGVMensuel(api_key, count):

    url = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"

    params = {
    "count": count,    # nombre de résultats à afficher
    "disable_geojson": "true",    # désactiver la géolocalisation
    "key": api_key   # votre clé API SNCF
    }

    headers = {
    "Accept": "application/json"    # spécifier l'en-tête "Accept" pour recevoir les données au format JSON
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        '''for departure in data["departures"]:
            print(departure["display_informations"]["direction"])'''
        return print(data)
        #db.test.insert_one(data)
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None

TGVMensuel(api_key, 10)