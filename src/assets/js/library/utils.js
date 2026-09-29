/**
 * Crée un filtre de tag pour la méthode filter de Library. La fonction
 * retourne une fonction de rappel (callback) qui prend un texte avec des tags et
 * retourne un booléen : vrai si le texte possède le tag, faux sinon.
 * 
 * Exemple : library.filter(createTagFilter("javascript"))
 * @param {string} tag tag recherché
 * @returns {(text:{tags:string[]})=>boolean} prédicat à passer à Library.filter
 */
export function createTagFilter(tag) {
  // TODO : retourner la fonction qui valide la présence d'un tag dans un objet texte
  return (text) => text.tags.includes(tag);
}

/**
 * Calcule la longueur moyenne, en caractères, des textes reçus.
 * @param {Array<{content:string}>} texts textes à mesurer
 * @returns {number} longueur moyenne des textes ou 0 si la liste est vide
 */
export function computeAverageTextLength(texts) {
  if (texts.length === 0) {
    return 0;
  }
  const totalLength = texts.reduce((sum, text) => sum + text.content.length, 0);
  return totalLength / texts.length;
}
