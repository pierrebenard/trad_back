import argparse
from pymongo import MongoClient
from datetime import datetime

# Configuration de l'analyseur d'arguments
parser = argparse.ArgumentParser()
parser.add_argument('--date', help='La date spécifiée dans la requête')

# Analyse des arguments
args = parser.parse_args()

# Récupération de la date
date = args.date

# Convertir la date en objet datetime
formatted_date = datetime.strptime(date, '%Y %m %d')

# Se connecter à la base de données MongoDB
client = MongoClient('mongodb+srv://pierre:ztxiGZypi6BGDMSY@atlascluster.sbpp5xm.mongodb.net/?retryWrites=true&w=majority')

# Sélectionner la base de données
db = client.test

# Sélectionner la collection
collection = db.things

# Requête pour récupérer les documents avec le champ date égal à l'argument date
query = {'dateAndTimeOpening': formatted_date}
documents = collection.find(query)

# Convertir les documents en liste de dictionnaires JSON
json_data = []
for document in documents:
    json_data.append(document)

# Utilisez les données récupérées dans votre API comme vous le souhaitez
# Par exemple, renvoyez les données en tant que réponse JSON
