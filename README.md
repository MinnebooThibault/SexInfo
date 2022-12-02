# Sexinfo

## Sommaire
- [Présentation du projet](#présentation-du-projet)
- [Principe du jeu](#principe-du-jeu)
    - [Pages du site](#pages-du-site)
- [Outils utilisés](#outils-utilisés)
- [Défis](#défis)
    - [Docker](#docker-✅)
    - [to git or not to git](#to-git-or-not-to-git-✅)
    - [Easter egg](#easter-eggs-❌)
    - [Bot Discord](#bot-discord-❌)
    - [Accessibilité](#accessibilité-❌✅)
<details>
    <summary>Dérouler</summary>
    
</details>

## Présentation du projet
Ce projet est un site en ligne sous forme de quizz pouvant être joué par n'importe qui. Le quizz porterait sur des questions autour de la sexualité, principalement à propos de ses risques. Les utilisateurs auront le choix entre 4 réponses (de la même manière que Kahoot).

## Principe du jeu
### Pages du site
- Acceuil

Acceuil présentant le site en lui même, et contenant la connexion des utilisateurs. 
- Jeu

Contenu du jeu en lui même.

- Leaderboard

Affichage en temps réel du classement des joueurs, qui serait sous forme de :
| Rang | Nom de l'utilisateur | Niveau | xp |
| :--: | :------------------: | :----: | :-: |
| #1 | Moi | 12 | 1304xp |
| #2 | Lui | 11 | 1240xp |
| ... | ... | ... | ... |

## Outils utilisés

> Docker

Docker a été utilisé pour packager l'application à la fois en développement et en production.
> React

Le React permet de rendre le site internet intéractif.
> Socket.io

Socket.io a utilisé pour la communication en temps réel entre les clients et le serveur.

> MariaDB

MariaDB est le SGBD qui a été utilisé pour ce projet.
> Asprite

Aseprite a été utilisé pour le graphisme, soit la réalisation des sprites.

## Défis
Défis qui auraient dû être réalisé pour ce projet. Ceux indiqués avec ❌ n'ont pas pu être réalisés, et ✅ pour ceux qui ont pu être fait.
### [Docker](https://www.nuitdelinfo.com/inscription/defis/330) ✅
### [to git or not to git](https://www.nuitdelinfo.com/inscription/defis/355) ✅
Le défi était de réaliser un dépôt Git (dans notre cas via Github) et un Readme en markdown (soit le fichier que vous lisez actuellement). Au final, celui ci est devenu la pièce principal du projet pour expliquer ce dont nous avons voulu faire.
### [Easter Eggs](https://www.nuitdelinfo.com/inscription/defis/328) ❌
Le défi d'Easter Egg était de placer des Easter Egg de manière intelligente. Nous avions imaginé d'intégrer ces Easter Egg dans la liste des achievements, mais pas de manière aussi explicit que ceux ci.

C'est à dire que l'on mettrais seulement leur nom et une petite description, sans expliquer comment l'obtenir. Ce qui forcerait aux joueurs de réfléchir à une manière de trouver ces Easter Egg, et les infos dans la liste d'Achievement aurait été des indices.

Nous nous sommes dit que nous allions surtout en chercher en fonction du rendu du site. Mais sachant qu'il n'a pas pu être finalisé, notre liste est plutôt maigre honnêtement. Voici tout de même notre liste :
| nom de l'Easter Egg | comment l'obtenir | ce qu'il fait | Note |
| :-----------------: | :---------------: | :-----------: | :--: |
| Konami Code | (au clavier) flèche du haut, flèche du haut, flèche du bas, flèche du bas, flèche de gauche, flèche de droite, flèche de gauche, flèche de droite, B, A, Entrée (pour remplacer le start) ![Konami Code input](/Readme_assets/Konami_Code.png) | Débloque le skin de Solid Snake pour le joueur ![Solid Snake Sprite](/site/assets/snake.png)| Cet Easter Egg est présent dans la majorité des jeux Konami et plus encore. On s'est donc dit que ça aurait été un ajout sympatique. L'idée est venue d'un autre défi dédié à cet Easter Egg organisé par Dassault |
| It's dangerous to go alone... | Lancer une partie tout seul | Annonceur faisant une annonce spéciale à propos de ça, qui serait plutôt humoristique (blague sur le fait que le joueur soit seul) | Référence geek très connue, étant la première boîte de dialogue dans le premier Zelda, où Link récupère sa première épée, ce qui engendre le véritable début du gameplay |
| Sus.. | Mettre le skin3 | Among Us présent dans le sprite du Skin3 ![Skin 3](/site/assets/skin3.png)| Référence aux nombres d'Among gus dissimulé absolument partout dans le r/place 2022. La simplicité de cet Easter Egg aurait été une parfaite introduction à la "chasse" aux Easter Egg |
| A: Life! | Appuyer 42 fois sur un bouton | ? | Comme 42 est la réponse à la vie et que le sujet du site a un rapport avec la procréation, il nous semblait pas hors sujet d'intégrer un Easter Egg lié au nombre 42. Le "A:" pour Answer, qui veut dire réponse en anglais, et le format "A:" est très utilisé dans les Q&A (FAQ en anglais). Le nom "A: Life!" aurait pu être interprété par "A Life!" par les joueurs, ce qui les auraient brouiller les pistes des joueurs pour trouver cet Easter Egg, et l'aurait rendu compliqué |
### [Bot Discord](https://www.nuitdelinfo.com/inscription/defis/349) ❌
Le bot Discord aura été utilisé pour pouvoir configurer des lobbies (dans un stade beaucoup plus avancé), mais il aurait surtout permis d'intéragir avec l'API pour obtenir des informations sur les utilisateurs, principalement des statistiques.

Nous avons poussé le concept de Discord au point de l'utiliser en temps qu'authentification pour le site. Nous aurions pensé que ça aurait été simple au vu de l'expérience des membres, mais nous nous sommes confrontés au fait que Discord ait changé entièrement son API il y a un peu plus d'un an, ce qui nécessitait de tout réapprendre.

Le bot aurait très propablement été fait via `discord.js`, et `discord.py` en recours.

### [Accessibilité](https://www.nuitdelinfo.com/inscription/defis/349) ❌/✅
En théorie le site aurait été assez accessible, et il l'aurait été encore plus pour les utilisateurs de Discord avec les fonctionnalités prévus avec l'intégration du bot.

On pourrait dire que le site n'est donc peu accessible car il n'es littéralement pas fonctionnel en l'état, mais de ce fait, il n'y a aucune discrimination en terme d'accessiblité.