---
title: "Application architecture à trois niveaux"
date: 2022-11-07T17:22:00+02:00
categories: [ "Projet universitaire", "Web", "Python", "Flask" ]
image: "/images/projets/projetMSI/MSIThreeTierAppVignette.png"
imageAlt: "Illustration de serveurs de datacenter sous un ciel bleu et nuageux, avec des nuages rouges évoquant le réchauffement climatique"
description: "Un client dispose de plusieurs datacenters. En raison du réchauffement climatique, il devient important d'optimiser la régulation des climatisations de ces centres données..."
lienYoutube: "null"
lienGitHub: "https://github.com/AymericJak/UnivProject-MSIThreeTierArchitectureApp"
lienSite: "null"
draft: false
---

##### Membres du projets :
- BOBEUF Jules [LinkedIn](https://www.linkedin.com/in/bobeuf-jules/)
- SANTORO Thomas [LinkedIn](https://www.linkedin.com/in/thomas-santoro/)

### I/ Réalisation de l'application avec Flask

L'application a donc été réalisée avec Flask, un micro framework pour le développement web en python.

Nous allons réaliser une application web qui repose sur une architecture à trois niveaux.

L'architecture à deux niveaux (aussi appelée architecture 2-tier) caractérise les systèmes clients/serveurs dans lesquels le client demande une ressource et le serveur la lui fournit directement. Cela signifie que le serveur ne fait pas appel à une autre application afin de fournir le service.
Dans l'architecture à 3 niveaux (appelée architecture 3-tier), il existe un niveau intermédiaire, c'est-à-dire que l'on a généralement une architecture partagée entre :

1. Le client (le demandeur de ressources)
2. Le serveur d'application (appelé aussi middleware, c'est-à-dire le serveur chargé de fournir la ressource, mais faisant appel à un autre serveur)
3. Le serveur secondaire (généralement un serveur de base de données ... fournissant un service au premier serveur)

Dans l'architecture à trois niveaux par contre, les applications au niveau serveur sont délocalisées, c'est-à-dire que chaque serveur est spécialisé dans une tâche (serveur web et serveur de base de données par exemple). Ainsi, l'architecture à trois niveaux permet :

- une plus grande flexibilité/souplesse
- une plus grande sécurité (la sécurité peut être définie pour chaque service)
- de meilleures performances (les tâches sont partagées)

<hr>

Ainsi, nous avons adopté l'architecture suivante pour notre projet :

```bash
├── README.md
├── __pycache__
│   ├── app.cpython-310.pyc
│   ├── basedonnee.cpython-310.pyc
│   └── visualisationDonnees.cpython-310.pyc
├── app.py
├── basedonnee.py
├── bd.sqlite
├── logs.txt
├── static
│   ├── images
│   │   └── visualisation
│   │       ├── humidite.png
│   │       ├── pression.png
│   │       └── temperatures.png
│   └── styles
│       └── style.css
├── templates
│   ├── base.html
│   ├── contact.html
│   ├── form.html
│   ├── index.html
│   └── infosVille.html
├── tests
│   ├── __pycache__
│   │   └── conftest.cpython-310-pytest-7.2.0.pyc
│   ├── conftest.py
│   └── functional
│       ├── __init__.py
│       ├── __pycache__
│       │   ├── __init__.cpython-310.pyc
│       │   └── testsPages.cpython-310-pytest-7.2.0.pyc
│       └── testsPages.py
```

### II/ Base de données

Pour notre 3<sup>ème</sup> couche, la couche servant aux bases de données, nous avons utilisé `SQLite`.

Retrouvez ci-dessous le diagramme généré par PyCharm de la base de données que nous avons modélisée :

![Diagramme application architecture à trois niveaux](/images/projets/projetMSI/MSIDiagram.png)

### III/ Requêtes API

Afin de récupérer les données, nous avons utilisé l'API suivante : [wttr](https://www.wttr.in/)

En python, pour effectuer des requêtes API, l'utilisation du module `requests` est nécessaire.

### IV/ Visualisation des données

Pour réaliser une visualisation des données, nous avons utilisé le module `matplotlib.pyplot` de python.

### V/ Formulaire

Pour le formulaire du site, nous avons utilisé le module  `flask_wtf` de python.

### VI/ Tests unitaires [expérimentation]

J'ai décidé d'essayer cette partie du projet qui était facultative.

J'ai donc procédé comme suit :

- Englober toute notre application dans la fonction `create_app(test_config)`
- Création d'un fichier `.env` pour une meilleure orgnisation du projet. Dans ce fichier y a été placée la variable `SECRET_KEY`.
```python
def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
        app.config.from_mapping(
            SECRET_KEY=os.environ.get('SECRET_KEY'),
        )
    else:
        app.config.from_mapping(test_config)
```
