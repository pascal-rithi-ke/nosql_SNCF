from config.bdd_conf import *

def actionBdd():
    collec = loadConfig()
    # appel la bdd "SNCF" pour faire les traitements vers la base mongo
    print(collec)

if __name__ == '__main__':
    actionBdd()
