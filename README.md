# TestIHM
Note 22/03/2018
Sylvain MOREAU


1° Fichier Dist = Build Projet prêt pour aller en production

2° Fichier Sources  = Sources Angular 5

3° Projet IHM : (précision fonctionnement)
- Possibilité de s'inscrire et de se connecter ( câblé avec Firestore et Firebase )
- Css compilé en SASS
- Concernant les articles : 
Possibilité de les acheter (une fois fait ils disparaissent car non disponibles) -> en direct via observable
Possibilité de les détruire (seul le statut change, ils restent visibles)
Pagination affichant des articles de 2 en 2

4° Lancement
Choix 1 : Mettre le fichier dist en prod
Choix 2 : 
- Installer node.js 
- récupérer les sources 
- exécuter la commande npm install pour gérer les 
- exécuter ng serve --open pour lancer le serveur node et afficher la single page application



