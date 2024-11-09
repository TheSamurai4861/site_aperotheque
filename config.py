import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'votre_clef_secrete')
    # Ajoutez d'autres configurations si nécessaire
