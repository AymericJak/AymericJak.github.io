---
title: "Dragon Expo"
date: 2022-01-16T19:00:00+02:00
categories : ["Projet universitaire", "Web"]
image : "/images/projets/dragon_Expo.png"
description : "Nous sommes spécialisé dans l'événementiel. Pour éviter d'avoir trop de concurrence, nous devons nous spécialiser dans un domaine particulier. Réalisation de fiche signalétique, personnas, site web, etc."
lienYoutube: "null"
lienGitHub: "https://github.com/AymericJak/UnivProject-DragonExpo"
draft: false
---

Voici le premier projet concret que j’ai réalisé en informatique. Dans ce projet, la création d’une entreprise d'événementiel était de mise. Afin d’en améliorer sa communication, la réalisation d’un site web et de son design était nécessaire. 

### I/ Création de l'entreprise

La première étape de ce projet consistait à réaliser un brainstorming pour en savoir plus sur le type d’événement que nous proposons. 
Une fois notre thème trouvé, en l'occurrence ici : une exposition sur les dragons, nous avons réalisé différents personas afin de déterminer les potentielles cibles de notre entreprise.

Par la suite, nous avons réalisé un questionnaire sur Google Form, pour identifier les besoins de nos futurs clients. [Ce questionnaire a été réalisé par une dizaine de personnes] 


### II/ Graphisme

Maintenant que la base précédente a été réalisée, nous avons pu réaliser le Webdesign de notre site / image de marque.
Pour ce faire, nous avons réalisé une maquette grâce à l’outil Balsamiq.
Divers documents ont aussi été réalisés tels que la charte graphique et la charte éditoriale.


### III/ HTML CSS

Dès lors que la maquette, ainsi que les éléments graphiques correspondant à notre image de marque ont été établis, la traduction en langage HTML-CSS a été possible. Nous avons également assuré le niveau qualitatif de notre code en réalisant diverses vérifications avec le site W3C.


### IV/ Gestion de projet

Afin de préparer notre politique et stratégie commerciale, une étude de la concurrence est nécessaire. Pour ce faire, diverses analyses ont été réalisées :
- Le positionnement de notre entreprise 
- Un tableau comparatif de nos principaux concurrents
- Une matrice FFOM de notre projet

### V/ Bilan critique {class="has-text-danger-dark"}

Une année à la suite de ce projet, plusieurs critiques peuvent être émises. Premièrement, l'architecture du projet aurait pu t'être plus adaptée. En effet, à partir de la racine, un projet source `src/` aurait pu t'être créé. Le nom des dossiers plus cohérents. Les noms des images sans caractères spéciaux. En utilisant le camelCase.

Architecture actuelle :

```bash
.
├── FAQ.html
├── Images
│   ├── Noustrouver.png
│   ├── boutique.png
│   ├── cadeau.png
│   ├── culture
│   │   ├── Apep.png
│   │   ├── Apollon.png
│   │   ├── Grand’Goule.png
│   │   ├── Ladon.png
│   │   ├── Léviathan.png
│   │   ├── L’hydre.png
│   │   ├── gravure_Tiamat.png
│   │   └── mušḫuššu.png
│   ├── culture_dragon.png
│   ├── faq.jpg
│   ├── imageFondDragon.jpg
│   ├── logo.png
│   └── porteDeVersaille.JPG
├── README.md
├── Styles
│   └── style.css
├── boutique.html
├── concours.html
├── culture.html
└── index.html
```

Voici comment comment nous aurions pu la réaliser :
```bash
.
├── README.md
└── src
    ├── app
    │   ├── accueil
    │   │   ├── FAQ.html
    │   │   ├── boutique.html
    │   │   ├── concours.html
    │   │   └── culture.html
    │   └── index.html
    ├── images
    │   ├── accueil
    │   │   ├── nousTrouver.png
    │   │   ├── boutique.png
    │   │   ├── cadeau.png
    │   │   ├── cultureDragon.png
    │   │   ├── faq.jpg
    │   │   ├── imageFondDragon.jpg
    │   │   └── porteDeVersaille.JPG
    │   ├── culture
    │   │   ├── apep.png
    │   │   ├── apollon.png
    │   │   ├── grandGoule.png
    │   │   ├── Ladon.png
    │   │   ├── Leviathan.png
    │   │   ├── hydre.png
    │   │   ├── gravureTiamat.png
    │   │   └── mushussu.png
    │   └── logo
    │       └── logo.png
    └── styles
        └── style.css
```

Maintenant que j'ai des connaissances en Git, je me dis qu'il aurait été bien plus simple de faire la mise en commun du code entre les membres du projets à l'aide de cet outil de versionning.
L'ajout d'un `README.md` aurait été également bénéfique pour expliquer le but de notre application, etc.


Niveau design, le choix de la police d'écriture, le choix des couleurs aurait pu être plus adapté pour l'accessibilité [texte noir sur fond rouge peu lisible]

Le formulaire en pied de page est inutilisable, une amélioration est possible en utilisant du Javascript