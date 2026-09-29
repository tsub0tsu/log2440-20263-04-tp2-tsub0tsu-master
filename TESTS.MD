# Bibliothèque de tests unitaires Jest

La bibliothèque <a href="https://jestjs.io/">Jest</a> sera utilisée dans ce travail pratique. Contrairement au TP1, cet outil se concentre sur la validation et vérification du code JavaScript. Une fois bien implémenté, votre code devrait fonctionner sans une interface graphique.

Pour exécuter les tests unitaires de jest, vous pouvez utiliser la commande `npm run test:unit` qui va exécuter vos tests dans le terminal. 

Initialement, certains tests échoueront si vous n'avez pas encore implémenté les fonctionnalités liées. Un des tests de la fonction `computeFrequency` échoue puisque la fonction contient un bug intentionnel. Utilisez la logique du test pour vous aider à identifier et corriger le problème. Assurez-vous de modifier le nom du test par la suite.

Notez que les tests fournis couvrent seulement une partie des fonctionnalités demandées dans l'énoncé. Vous devrez compléter votre code pour répondre à toutes les exigences fonctionnelles.

### Tests unitaires

Le fichier [utils.test.js](./tests/utils.test.js) contient des tests unitaires pour les fonctions du fichier [utils.js](./src/assets/js/library/utils.js). Il vous est conseillé de commencer par l'implémentation de la fonction `createTagFilter`. La commande `npm run test:intro` vous permet de lancer uniquement les tests de ce fichier.

Le fichier [tagger.test.js](./tests/tagger.test.js) contient des tests unitaires pour les fonctions du fichier [tagger.js](./src/assets/js/tagger/tagger.js).

Le fichier [tfidfTagger.test.js](./tests/tfidfTagger.test.js) contient des tests unitaires pour les fonctions du fichier [tfidfTagger.js](./src/assets/js/tagger/tfidfTagger.js).

Le fichier [library.test.js](./tests/library.test.js) contient des tests unitaires pour les fonctions du fichier [library.js](./src/assets/js/library/library.js).

Vous êtes libres d'ajouter des tests supplémentaires pour valider votre code, mais assurez-vous que les tests fournis passent tous avant de soumettre votre travail.

**Note** : **Tous** les tests fournis doivent passer lors de la remise.