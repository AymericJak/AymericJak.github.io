---
title: "Fractal project"
date: 2022-10-30T17:22:00+02:00
categories : ["University project", "JAVA"]
image : "/images/projets/projetFractales/fractalVignette.png"
description : "Our team has been chosen by a partner high school to develop a software library in order to show mathematical properties to its students in a playful way. More precisely, this library must be able to generate images representing different fractals."
lienYoutube: "null"
lienGitHub: "https://github.com/AymericJak/UnivProject-fractalGenerationApp"
lienSite: "null"
draft: false
---

##### Project members :
- BOBEUF Jules [LinkedIn](https://www.linkedin.com/in/bobeuf-jules/)
- SANTORO Thomas [LinkedIn](https://www.linkedin.com/in/thomas-santoro/)

### I/ Complex numbers

In this section, we are asked to implement a class to perform classical operations on complex numbers. This class must implement the `IComplex` interface which is provided to us. A test class is also provided to check that our implementation is correct.

### II/ Complex suites and fractals

It is possible to generate nice fractals by considering sequences of complex numbers. Typically, the colour of a pixel of the image is then determined from the number of iterations necessary to determine if the sequence diverges or not. In our case, we will consider that the sequence diverges as soon as we obtain a complex number with a modulus strictly greater than 2 (we will then stop going through the terms of the sequence). The following sections describe the different complex sequences that we have to implement. 

We have implemented 2 suites:

- Julia's suite

![Julia's suite](/images/projets/projetFractales/julia.jpg)

- Mandelbrot's suite

![Mandelbrot's suite](/images/projets/projetFractales/mandelbrot.jpg)


And their generalisations:

- The generalized Julia sequence

![generalized Julia sequence](/images/projets/projetFractales/juliaGeneralisee.jpg)

- The generalized Mandelbrot sequence

![generalized Mandelbrot sequence](/images/projets/projetFractales/mandelbrotGeneralisee.jpg)

### III/ Choice of colours

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

### VII/ Critical review {class="has-text-danger-dark"}

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