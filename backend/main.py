import pymongo, json, os
from bdd.config.bdd_conf import *

from bson import json_util
from flask import Flask, jsonify
from flask_cors import CORS

from dotenv import load_dotenv

load_dotenv()
ApiKey = os.getenv('ApiKey')
CheckCollection = loadConfigDataBase()


app = Flask(__name__)
CORS(app)

@app.route("/")
def test():
    response = "flask"
    return response

if __name__ == "__main__":
    app.run()