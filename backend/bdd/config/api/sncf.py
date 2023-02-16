import requests

import os
from dotenv import load_dotenv

load_dotenv()
ApiKey = os.getenv('ApiKey')

def departMontparnasse(ApiKey):
    url = "https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87391003/departures"
    params = {
    # désactiver la géolocalisation
    "disable_geojson": "true",
    # votre clé API SNCF
    "key": ApiKey
    }
    headers = {
    # spécifier l'en-tête "Accept" pour recevoir les données au format JSON
    "Accept": "application/json"
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None

def objetTrouve(ApiKey):
    url = "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&rows=-1"
    params = {
    "disable_geojson": "true",
    "key": ApiKey
    }
    headers = {
    "Accept": "application/json"
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None
    
def terMensuel(api_key):
    url = "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-ter&q=&sort=date&facet=date&facet=region"
    params = {
    "disable_geojson": "true",
    "key": api_key
    }
    headers = {
    "Accept": "application/json"
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None
    
def TGVMensuel(api_key):
    url = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"

    params = {
    "disable_geojson": "true",
    "key": api_key
    }
    headers = {
    "Accept": "application/json"
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print("Une erreur est survenue: {}".format(response.status_code))
        return None