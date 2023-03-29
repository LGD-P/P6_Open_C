![](logo/preview.gif)

# Projet 6 Just Stream It: 

*Le but de ce projet est de créer un site web capable 
de communiquer avec une API en utilisant HTML CSS et Vanilla Javascript*

<img align="left" width="150" height="100" src="logo/image.png">**Le scénario est celui d'une association qui souhaite proposer un service pour accéder aux informations des méilleurs films du moment.**



**L’interface doit comprendre 5 zones sous le header :** 

    • “Meilleur film” : Cette zone affiche la photo du film qui a la meilleur note Imdb toutes catégories confondues, ainsi que son titre, un bouton et le résumé du film sous le bouton. 

    • “Films les mieux notés” : Cette zone affiche les 7 autres films les mieux notés toutes catégories confondues. On pourra les faire défiler avec une flèche à gauche et à droite. 

    • “Catégorie 1” : Montre les 7 films les mieux notés d’une catégorie donnée.  

    • “Catégorie 2” : Montre les 7 films les mieux notés d’une autre catégorie. 

    • “Catégorie 3” : Idem sur une autre catégorie ! 



**Une fenêtre modale doit être déclanchée sur un bouton et 
au clic de l'utilisateur, sur les vignettes présentes dans les caroussels, elle contient les données suivantes remontant de l'API**

    • L’image de la pochette du film 
    • Le Titre du film 
    • Le genre complet du film 
    • Sa date de sortie 
    • Son Rated 
    • Son score Imdb 
    • Son réalisateur 
    • La liste des acteurs 
    • Sa durée 
    • Le pays d’origine 
    • Le résultat au Box Office 
    • Le résumé du film 


**L'API utilisée et son processus d'installation :**

    
Cloner le dépôt de code à l'aide de la commande :

    git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git
    
*(vous pouvez également télécharger le code en temps qu'archive zip)*

Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande :
        
    cd OCMovies-API-EN-FR-master

Installez les dépendances du projet à l'aide de la commande : 

    pipenv install
    
Créer et alimenter la base de données à l'aide de la commande 

    pipenv run python manage.py create_db

Démarrer le serveur avec :
    
    pipenv run python manage.py runserver


A la racine du projet cloner le front avec la commande:

    git clone https://github.com/LGD-P

Il n'y a plus qu'à lancer le fichier index.html dans votre navigateur.


