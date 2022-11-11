---
title: "Managment-sellApp"
date: 2022-05-29T19:12:00+02:00
categories : ["Projet universitaire", "JAVA"]
image : "/images/projets/gestionVentesVignette.png"
description : "L'objectif général est la réalisation d'une application développée en Java afin de permettre à une entreprise de ventes d'automatiser la gestion de ses commandes."
lienYoutube: "null"
lienGitHub: "https://github.com/AymericJak/UnivProject-ApplicationGestionVentes"
draft: false
---

Dans ce projet a été réalisée une application de gestion de ventes

## Partie I

Dans cette première partie, la réalisation d’une application de gestion de ventes sans interface graphique est de mise. Celle-ci va permettre de mettre en oeuvre toutes nos compétences apprises en Java. 

1. #### Java

Nous avons donc dû réaliser différents paquetages :
- Le paquetage article
Celui-ci va permettre la gestion des articles présents dans notre application.

- Le paquetage client
Celui-ci va permettre la gestion des clients présents dans notre application.

- Le paquetage commande
Celui-ci va permettre la gestion des commandes réalisées dans notre application.

- Le paquetage gestionnaire
Celui-ci va permettre la gestion dans l’application des différents traitements à travers des menus textuels.

- Le paquetage test
Celui-ci va permettre d’effectuer des tests sommaires et simples sur les classes que l’on a programmées.

- Le paquetage principal
Celui-ci va contenir notre classe principale et permettre de lancer le programme général de notre application.

2. #### Gestion de projet

Nous avons dans cette partie choisi notre type d’enseigne de ventes : la vente de biens animaliers.
Divers documents ont été réalisés :
- Tableau QQOQCPC
- Note de cadrage
- Un tableau de répartition des tâches ainsi que son diagramme de Gantt

## Partie II

Dans cette seconde partie, nous avons considérablement amélioré la qualité de notre projet.

1. #### JAVA

Nous avons tout d’abord ajouté la gestion de véhicules à notre application.
Pour ce faire, nous sommes passés par Modelio afin de réaliser un diagramme de classe UML. 

2. #### Qualité développement

Ensuite, nous sommes revenus sur notre code réalisé à la première partie pour réaliser de vrais tests unitaires. Pour ce faire, nous avons utilisé diverses librairies :
- Junit 5
- Mockito
- etc.

Ainsi, pour chaque classe réalisée dans le projet, nous avons réalisé un ensemble de tests unitaire avec un taux de recouvrement supérieur à 80 %.

3. #### Interface Homme Machine

Pour terminer, nous avons dû adapter notre code pour intégrer une interface graphique.
Pour l’implémentation d’une interface graphique, nous avons utilisé JavaFX.
Un ensemble de vues et de contrôleurs ont été réalisés.
