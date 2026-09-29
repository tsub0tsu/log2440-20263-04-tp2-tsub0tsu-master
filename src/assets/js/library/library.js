export default class Library {

  /**
   * Initialise la bibliothèque avec une liste de textes et ajoute une liste de tags vide
   * @param {Array<{id:number, content:string, tags?: string[]}>} texts textes initiaux de la bibliothèque
   */
  constructor(texts = []) {
    // TODO : réécrire la logique sans utiliser la méthode forEach ou une boucle for/while
  this.texts = texts.map((text) => {
  text.tags = text.tags || [];
  return text;
  });
  }

  /**
   * Ajoute un nouveau texte à la bibliothèque sans tags et id = id maximal existant + 1. 
   * @param {string} content contenu du nouveau texte
   */
  addText(content) {
    // TODO : trouver le prochain identifiant sans boucle for/while et créer une nouvelle entrée dans la bibliothèque
    const nextId = -1;
    const text = { id: nextId, content, tags: [] };
  }

  /**
   * Supprime un texte de la bibliothèque à partir de son identifiant.
   * @param {number} id identifiant du texte à supprimer
   */
  removeText(id) {
    // TODO : supprimer le texte sans boucle for/while
  }

  /**
   * Retourne un texte de la bibliothèque à partir de son identifiant.
   * @param {number} id identifiant du texte recherché
   * @returns {{id:number, content:string, tags: string[]}|undefined} le texte trouvé ou undefined
   */
  getText(id) {
    // TODO : retrouver un texte spécifique sans boucle for/while
  }

  /**
   * Génère les tags de tous les textes de la bibliothèque avec le tagger
   * @param {Tagger} tagger générateur de tags à utiliser
   */
  tagAll(tagger) {
    this.texts.forEach((text) => {
      text.tags = tagger.getTags(text.content);
    });
  }

  /**
   * Génère une nouvelle bibliothèque contenant seulement les textes qui
   * respectent le prédicat reçu en paramètre. La bibliothèque originale
   * ne doit pas être modifiée.
   * 
   * Exemple : library.filter((text) => text.tags.includes("javascript"))
   * @param {Function} predicate fonction qui prend un texte et retourne un booléen
   * @returns {Library} nouvelle bibliothèque filtrée
   */
  filter(predicate) {
    return new Library(this.texts.filter(predicate));
  }
}
