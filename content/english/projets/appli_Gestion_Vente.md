---
title: "Sales Management Application"
date: 2022-06-17T19:12:00+02:00
categories : ["University project", "JAVA"]
image : "/images/projets/gestionVentesVignette.png"
imageAlt: "Image from our fictitious Nékléo pet shop flyer"
description : "The purpose of the project is to develop an application in Java to allow a sales company to automate the management of its orders."
lienYoutube: "null"
lienGitHub: "https://github.com/AymericJak/UnivProject-ApplicationGestionVentes"
lienSite: "null"
draft: false
---

In this project, a sales management application was developed.

## Part I

In this first part, the realization of a sales management application without graphical interface is a requirement. This will allow us to use all our skills learned in Java.

1. #### Java

So we had to make different packages:
- The article package
This one will allow the management of the articles present in our application.

- The client package
This one will allow the management of the customers present in our application.

- The order package
This one will allow the management of the orders made in our application.

- The manager package
This one will allow the management of the different treatments in the application through textual menus.

- The test package
This one will allow to make summary and simple tests on the classes that we have programmed.

- The main package
This one will contain our main class and will allow to launch the general program of our application.

2. #### Project management

In this section, we have chosen our type of shop: the sale of animal items.
Various documents were produced:
- QQOQCPC table
- Framing note
- A task distribution table and its Gantt chart

## Part II

In this second part, we have considerably improved the quality of our project.

1. #### JAVA

First of all, we added vehicle management to our application.
To do this, we used Modelio to create a UML class diagram. 

2. #### Quality development

Then we went back to our code from the first part to do real unit tests. To do this, we used various libraries :
- Junit 5
- Mockito
- etc.

So, for each class realized in the project, we realized a set of unit tests with a recovery rate higher than 80%.

3. #### Human-Machine Interface

Finally, we had to adapt our code to integrate a graphical interface.
For the implementation of a GUI we used JavaFX.
A set of views and controllers were made.
