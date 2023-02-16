from config.bdd_conf import *

def actionBdd():
    collec = loadConfig()
    # appel la collection "SNCF" pour faire les traitements vers la base de donnée
    print(collec)

if __name__ == '__main__':
    actionBdd()
