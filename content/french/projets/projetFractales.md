---
title: "Projet fractales"
date: 2022-10-30T17:22:00+02:00
categories : ["Projet universitaire", "JAVA"]
image : "/images/projets/projetFractales/fractalVignette.png"
description : "Notre équipe a été choisie par un lycée partenaire pour développer une bibliothèque logicielle visant à faire découvrir des propriétés mathématiques à ses élèves de manière ludique. Plus précisément, cette bibliothèque doit pouvoir générer des images représentant différentes fractales."
lienYoutube: "null"
lienGitHub: "https://github.com/AymericJak/UnivProject-fractalGenerationApp"
draft: false
---

##### Membres du projets :
- BOBEUF Jules [LinkedIn](https://www.linkedin.com/in/bobeuf-jules/)
- SANTORO Thomas [LinkedIn](https://www.linkedin.com/in/thomas-santoro/)

### I/ Les nombres complexes

Dans cette section, il nous est demandé d’implanter une classe permettant de réaliser des opérations classiques sur les nombres complexes. Cette classe doit implémenter l’interface `IComplex` qui nous est fournie. Une classe de test nous est par ailleurs proposée afin de vérifier que notre implantation est correcte.

### II/ Suites complexes et fractales

Il est possible de générer de jolies fractales en considérant des suites de nombres complexes. Typiquement, la couleur d’un pixel de l’image est alors déterminée à partir du nombre d’itérations nécessaires pour déterminer si la suite diverge ou non. Dans notre cas, nous considérerons que la suite diverge dès que l’on obtient un nombre complexe de module strictement plus grand que 2 (on arrêtera alors de parcourir les termes de la suite). Les sections suivantes décrivent les différentes suites complexes que nous devons implanter. 

Nous avons ainsi implémenté 2 suites :

- La suite de Julia

![Suite de Julia](/images/projets/projetFractales/julia.jpg)

- La suite Mandelbrot

![Suite Mandelbrot](/images/projets/projetFractales/mandelbrot.jpg)


Et leurs généralisations :

- La suite de Julia généralisée

![Suite de Julia généralisée](/images/projets/projetFractales/juliaGeneralisee.jpg)

- La suite Mandelbrot généralisée

![Suite Mandelbrot généralisée](/images/projets/projetFractales/mandelbrotGeneralisee.jpg)

### III/ Choix des couleurs

Pour pouvoir générer nos fractales, nous avons besoin de définir une palette de couleurs. Cette palette doit pouvoir déterminer, à partir du nombre d’itérations réalisées, la couleur à afficher sur le pixel, en fournissant une instance de `java.awt.Color`.

Plusieurs palettes de couleurs différentes peuvent être envisagées. Par exemple, nous pouvons choisir d’appliquer un niveau de gris, en calculant le ratio entre le nombre d’itérations effectivement réalisées et le nombre maximum d’itérations initialement prévues. Nous pouvons également choisir une palette de couleurs pour laquelle nous définissons manuellement les différentes couleurs possibles, et choisir parmi ces couleurs celle qui sera utilisée.

### IV/ Suites chaotiques et diagrammes de bifurcation

En suivant le modèle des suites de nombres complexes étudiées dans la section précédente, on souhaite maintenant pouvoir calculer des suites de points du plan réel ℝ<sup>2</sup>.

### V/ Création + génération d’images en Java

Afin de créer une image en Java, nous avons la possibilité d’utiliser la classe `java.awt.image.BufferedImage`. Celle-ci nous permet notamment d’affecter une couleur à un pixel de l’image, donné par ses coordonnées (x, y), où le point de coordonnées (0, 0) correspond au pixel en haut à gauche de l’image.

Nous allons maintenant pouvoir générer nos images à l’aide des différentes interfaces et classes développées dans les sections précédentes. Pour cela, nous avons besoin de connaître :
- la taille de l’image à générer ;
- l’échelle à appliquer sur l’image ;
- le point central de l’image ;
- l’approche permettant de générer la fractale (suite complexe ou chaotique) ;
- la palette de couleurs à utiliser ; et
- le fichier dans lequel sauvegarder le résultat

### VI/ Figures et transformations géométriques

Une autre manière de produire des fractales est de construire une première figure géométrique, puis de répéter cette construction, soit à l’identique, soit en lui appliquant une rotation ou une échelle donnée. Le tracé de figures géométriques sur des images matricielles étant assez fastidieux, nous proposons dans cette section d’utiliser plutôt des images au format SVG, un format textuel permettant de produire des images vectorielles.

Nous y avons généré le Tapis de Sierpiński :

![Tapis de Sierpiński](/images/projets/projetFractales/tapisDeSierpinski.jpg)

Ou encore le triangle de Sierpiński :

![Triangle de Sierpiński](/images/projets/projetFractales/triangleDeSierpinski.jpg)

### VII/ Bilan critique {class="has-text-danger-dark"}

Ce projet nous a permis d'appliquer les différents patrons de conception appris lors de ce semestre (S3) en cours de __qualité développement__.
En voici une liste :
- Décorateur
- Stratégie
- Itérateur
- Adaptateur
- Constructeur
- Composite
- Patron de méthode

Lors de ce projet, seules 2 parties étaient à réaliser parmi les parties suivantes : 
- Suites complexes
- Suites chaotiques et diagrammes de bifurcation
- Figures et transformations géométriques

Nous avons réalisé la première et la troisième. 
La première piste d'amélioration de ce projet serait donc de réaliser [en entier -> rendre fonctionnelle] les suites chaotiques.

Ensuite, pour la partie sur les figures géométriques, il aurait été bien de réaliser d'autres figures comme les [arbres fractales](http://mariefrance.hellot.free.fr/Tree1.html).