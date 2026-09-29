/**
 * Corpus de textes initial de l'application PolyTag.
 * Chaque texte possède un identifiant unique et un contenu. La liste des
 * tags ne fait pas partie des données : elle est ajoutée par la classe Library.
 */
const corpus = [
  {
    id: 1,
    content:
      "Le langage JavaScript est le langage de programmation du Web. Créé en quelques jours en 1995, JavaScript est aujourd'hui exécuté par tous les navigateurs et permet de rendre les pages interactives. Le langage supporte plusieurs styles de programmation et son écosystème est un des plus actifs du monde logiciel. La version moderne de JavaScript introduit les classes, les modules et une syntaxe plus expressive pour manipuler les tableaux et les objets.",
  },
  {
    id: 2,
    content:
      "Une page Web est construite avec le langage de balisage HTML qui décrit la structure du contenu : titres, paragraphes, listes et liens. La présentation visuelle de la page est définie par des feuilles de style CSS qui contrôlent les couleurs, la typographie et la disposition des éléments. Le code JavaScript complète le HTML et le CSS : un script JavaScript peut réagir aux actions de l'utilisateur et modifier la page. La combinaison du HTML, du CSS et du JavaScript forme la base de toute page Web moderne.",
  },
  {
    id: 3,
    content:
      "Le protocole HTTP définit la communication entre un client et un serveur sur le Web. Le client envoie une requête HTTP vers le serveur et le serveur retourne une réponse avec un code de statut. Les méthodes du protocole comme GET et POST décrivent l'intention de la requête. La version sécurisée du protocole chiffre les échanges entre le client et le serveur pour protéger les données transmises sur le réseau.",
  },
  {
    id: 4,
    content:
      "Le logiciel Git est un système de contrôle de versions distribué utilisé par la majorité des équipes de développement. Avec Git, chaque membre de l'équipe possède une copie complète de l'historique du projet. Les branches permettent de travailler sur une fonctionnalité sans toucher au code principal, de lancer les tests, puis de fusionner les modifications si les tests réussissent. Un bon message de commit décrit clairement le changement apporté au projet et facilite la collaboration dans l'équipe.",
  },
  {
    id: 5,
    content:
      "L'intelligence artificielle transforme le développement logiciel. Les modèles de langage peuvent générer du code, expliquer une erreur ou proposer des tests. Ces modèles sont entraînés sur des quantités énormes de données et leur apprentissage demande une grande puissance de calcul. L'intelligence artificielle reste cependant un outil : le programmeur doit comprendre le code produit, vérifier sa qualité avec des tests et garder un regard critique sur les suggestions des modèles.",
  },
  {
    id: 6,
    content:
      "Une base de données stocke l'information d'une application de manière fiable sur un serveur dédié. Les bases relationnelles organisent les données en tables et utilisent le langage SQL pour les requêtes envoyées au serveur. Une requête SQL peut filtrer, trier et regrouper les données de plusieurs tables. La conception du schéma de la base est une étape importante : un bon schéma évite la duplication des données et garantit leur cohérence.",
  },
  {
    id: 7,
    content:
      "Le réseau Internet relie chaque machine cliente à un serveur quelque part dans le monde. Chaque machine connectée au réseau possède une adresse IP qui permet de la joindre. L'information circule sous forme de paquets qui traversent plusieurs routeurs avant d'atteindre le serveur de destination. Le système de noms de domaine traduit un nom lisible comme polymtl point ca en adresse IP du serveur. Sans cette infrastructure de réseau, aucune application Web ne pourrait fonctionner.",
  },
  {
    id: 8,
    content:
      "La sécurité informatique protège les systèmes et les données contre les attaques. Une attaque courante sur le Web est l'injection de code dans un champ de formulaire mal validé. Le chiffrement des mots de passe et la validation des entrées sont des pratiques essentielles de sécurité. Aucun système n'est parfaitement sûr : la sécurité est un processus continu qui demande des mises à jour régulières et une vigilance constante des équipes.",
  },
  {
    id: 9,
    content:
      "Les tests automatisés vérifient que le code se comporte comme prévu. Un test unitaire isole une petite partie du code et compare le résultat obtenu au résultat attendu. Écrire des tests demande du temps, mais les tests détectent rapidement les régressions lors des modifications du code. Une bonne suite de tests sert aussi de documentation : lire les tests permet de comprendre le comportement attendu de chaque fonction du programme.",
  },
  {
    id: 10,
    content:
      "Le navigateur est l'environnement d'exécution principal du Web. Chaque navigateur moderne inclut des outils de développement qui permettent d'inspecter la page, de suivre les requêtes et de déboguer le code JavaScript. Les navigateurs jouent le rôle de client qui communiquent avec un ou plusieurs serveurs à travers des protocoles comme HTTP ou WS. Un client léger comme un navigateur peut faire beaucoup de travail : il peut exécuter du code JavaScript, stocker des données localement et même communiquer avec d'autres clients en temps réel grâce à des technologies comme WebRTC.",
  },
  {
    id: 11,
    content:
      "Le logiciel libre repose sur le partage du code source. Une licence libre donne le droit d'utiliser, d'étudier, de modifier et de redistribuer le logiciel. Des projets majeurs comme le noyau Linux sont développés par des communautés ouvertes de contributeurs. Contribuer à un projet libre est une excellente façon d'apprendre : le code est relu par la communauté et les contributeurs reçoivent des commentaires sur la qualité de leur travail.",
  },
  {
    id: 12,
    content:
      "Un algorithme décrit une suite d'étapes pour résoudre un problème. Le choix de la structure de données influence directement la performance d'un algorithme : un tableau, une liste ou un arbre n'offrent pas les mêmes opérations au même coût. La complexité mesure comment le temps de calcul d'un algorithme grandit avec la taille du problème. Comprendre la complexité permet de choisir le bon algorithme et la bonne structure pour chaque situation.",
  },
];

export default corpus;
