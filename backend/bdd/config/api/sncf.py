import requests

import os
from dotenv import load_dotenv

load_dotenv()
ApiKey = os.getenv('ApiKey')

def departMontparnasse(ApiKey, count):
    url = "https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87391003/departures"
    params = {
    # nombre de résultats à afficher
    "count": count,
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

def objetTrouve(ApiKey, count):
    url = "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&sort=date&facet=date&facet=gc_obo_date_heure_restitution_c&facet=gc_obo_gare_origine_r_name&facet=gc_obo_nature_c&facet=gc_obo_type_c&facet=gc_obo_nom_recordtype_sc_c"
    params = {
    "count": count,
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
    
def terMensuel(api_key, count):
    url = "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-ter&q=&sort=date&facet=date&facet=region"
    params = {
    "count": count,
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
    
def TGVMensuel(api_key, count):
    url = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"

    params = {
    "count": count,
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