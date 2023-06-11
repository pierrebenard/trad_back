from pymongo import MongoClient
from datetime import datetime

# Se connecter à la base de données MongoDB
client = MongoClient('mongodb+srv://pierre:ztxiGZypi6BGDMSY@atlascluster.sbpp5xm.mongodb.net/?retryWrites=true&w=majority')

# Sélectionner la base de données
db = client['test']

# Sélectionner la collection
collection = db['testDate']

# Créer une nouvelle date
new_date = datetime(2023, 11, 30)


# Enregistrer la date dans la collection
result = collection.insert_one({'date': new_date})

# Vérifier si l'opération d'insertion a réussi
if result.inserted_id:
    print('La date a été enregistrée avec succès.')
else:
    print('Une erreur s\'est produite lors de l\'enregistrement de la date.')
