---
title: "Dragon Expo"
date: 2022-01-16T19:00:00+02:00
categories : ["University project", "Web development"]
image : "/images/projets/dragon_Expo.png"
description : "We' re specialised in event management. To avoid having too much competition, we have to specialise in a particular field. Creation of identification sheets, personas, website, etc."
lienYoutube: "null"
lienGitHub: "https://github.com/AymericJak/UnivProject-DragonExpo"
draft: false
---

This is the first concrete project I have done in IT. In this project, the creation of an event company was required. In order to improve its communication, the creation of a website and its design was necessary. 

### I/ Creation of the company

The first step of this project was to brainstorm to find out more about the type of event we were proposing. 
Once we found our theme, in this case an exposition about dragons, we made different personas to determine the potential targets of our company.

Then we made a questionnary on Google Form, to identify the necessities of our future customers. [This form was completed by about ten people]. 


### II/ Graphic design

Now that the previous base has been completed, we were able to create the web design of our site / brand image.
To do this, we created a model using the Balsamiq tool.
Various documents were also produced such as the graphic charter and the editorial charter.


### III/ HTML CSS

Once the layout and the graphic elements corresponding to our brand image were established, the adaptation to HTML-CSS language was possible. We also made sure that our code was of high quality by carrying out various checks with the W3C site.


### IV/ Project management

In order to prepare our commercial policy and strategy, a study of the competition is necessary. To do this, various analyses were made:
- The positioning of our company 
- A comparative table of our main competitors
- A SWOT matrix of our project

### V/ Critical review {class="has-text-danger-dark"}

Un an après ce projet, plusieurs critiques peuvent être formulées. Tout d'abord, l'architecture du projet aurait pu être plus adaptée. En effet, à partir de la racine, un projet source `src/` aurait pu être créé. Les noms des dossiers sont plus cohérents. Les noms des images sans caractères spéciaux. L'utilisation de la camelCase.

Current architecture :

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

This is how we could have done it:

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

Now that I have some knowledge of Git, I think it would have been much easier to do the code sharing between project members using this versioning tool.
The addition of a `README.md` would also have been beneficial to explain the purpose of our application, etc.


In terms of design, the choice of font and colours could have been better adapted to accessibility [black text on a red background is difficult to read].

The form in the footer is unusable, an improvement is possible by using Javascript.