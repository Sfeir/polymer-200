# Trombinoscope
Un trombinoscope utilisant Polymer 1.2


## Pré-requis à l'installation

Les dépendances principales suivantes doivent avoir été installées :

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* Java 7, pour exécuter les tests


**1)** Vérifiez votre version de Node.js

```sh
node --version
```
La version doit être égale ou supérieure à 0.12.x.
Si vous n'avez pas Node.js ou que votre version est inférieure, allez sur [nodejs.org](https://nodejs.org) et installez la nouvelle version


**2)** Vérifiez votre version de java
 
```sh
java -version
```
Si vous n'avez pas Java ou que votre version est inférieure, allez sur [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) et installez le JDK.

## Installation

**1)**  Installez `gulp`, `bower` et `yeoman` globalement.

```sh
npm install -g gulp bower yo
```
Vous pourrez exécuter `gulp`, `bower` et `yeoman` en ligne de commande.


**2)** Installez le générateur Yeoman pour Polymer

```sh
npm install -g generator-polymer
```
Vous pourrez créer des nouveaux composants dans le répertoire app/elements ([plus de détails](https://github.com/yeoman/generator-polymer#element-alias-el))


**3)** Installez les dépendances du projet.

```sh
npm install && bower install
```

Ça installera les sous-librairies de composants Polymer (Paper, Iron, Platinum) nécessaires au projet.


## Pour le développement

### Serveur de développement

```sh
gulp serve
```

Ça démarrera un serveur local avec plusieurs IPs à disposition :

```
Access URLs:
 -------------------------------------
       Local: http://localhost:5000
    External: http://192.168.0.30:5000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.0.30:3001
 -------------------------------------
```
Les IP externes seront utilisées par les devices mobiles connectés au réseau local. Votre application sera disponible sur le port 5000 et une interface de synchronisation sera disponible sur le port 3001.


### Execution des tests

```sh
gulp test:local
```

Ça exécutera les tests unitaires présents dans le répertoire `app/test` grâce à [web-component-tester](https://github.com/Polymer/web-component-tester).


### Build & Vulcanisation

```sh
gulp
```

Build et optimise le projet, qui sera prêt au déploiement.


## Documentation

* [Polymer](https://www.polymer-project.org/), [Paper](https://elements.polymer-project.org/browse?package=paper-elements), [Iron](https://elements.polymer-project.org/browse?package=iron-elements) and [Neon](https://elements.polymer-project.org/browse?package=neon-elements) elements
* [Polymer Starter Kit](https://developers.google.com/web/tools/polymer-starter-kit/)
* Routing avec [Page.js](https://visionmedia.github.io/page.js/)
* Tests unitaires avec [Web Component Tester](https://github.com/Polymer/web-component-tester)


## Crédits
Formation créée par [Céline LOUVET](https://github.com/celinelouvet) pour [SFEIR](http://join.sfeir.com)
