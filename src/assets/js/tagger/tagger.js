/**
 * Produit les tags d'un texte de manière naïve : les N mots les plus
 * fréquents du texte deviennent ses tags.
 */
export default class Tagger {
  #corpus;
  #tagCount;

  /**
   * Le tagger utilise seulement le contenu des textes : les autres
   * attributs sont ignorés.
   * @param {Array<{content:string}>} corpus tableau de textes du corpus
   * @param {number} tagCount nombre de tags à produire par texte
   */
  constructor(corpus, tagCount = 3) {
    this.#corpus = corpus;
    this.#tagCount = tagCount;
  }

  /**
   * TODO : Compléter la fonction
   * @returns {Array<{content:string}>} corpus de textes
   */
  get corpus() {
    return this.#corpus;
  }

  /**
   * TODO : Compléter la fonction
   * Accesseur du nombre de tags à produire.
   * @returns {number} nombre de tags
   */
  get tagCount() {
    return this.#tagCount;
  }

  /**
   * Découpe un texte en tokens (mots)
   * Note : les apostrophes ne sont pas traitées. Ex : "l'algorithme" reste un seul token.
   * 
   * Fonction fournie : vous n'avez pas à la modifier.
   * @param {string} text texte à découper
   * @returns {string[]} tableau de tokens
   */
  tokenize(text) {
    return text
      .split(" ")
      .map((word) => word.toLowerCase().replace(/[.,:;!?()«»"]/g, ""))
      .filter((word) => word.length > 0);
  }

  /**
   * Calcule la fréquence de chaque token d'un tableau.
   * @param {string[]} tokens tableau de tokens
   * @returns {Object.<string, number>} objet { mot: nombre d'occurrences }
   */
  computeFrequency(tokens) {
    // TODO #1: ce code contient une erreur : trouver l'erreur à l'aide des tests/debugger et corrigez là.
    // TODO #2: implémenter la fonctionnalité corrigée sans boucle for(;;)
    return tokens.reduce((frequencies, token) => {
      frequencies[token] = (frequencies[token] || 0) + 1;
      return frequencies;
    }, {});
  }

  /**
   * Calcule le score d'un mot dans un texte :
   * nombre d'occurrences divisé par nombre total de tokens.
   * La méthode extrait (destructure) seulement les propriétés dont elle a besoin. 
   * @param {Object} context contexte du mot à évaluer
   * @param {number} context.count nombre d'occurrences du mot dans le texte
   * @param {number} context.tokenCount nombre total de tokens du texte
   * @returns {number} score du mot
   */
  computeScore({ count, tokenCount }) {
    return count / tokenCount;
  }

  /**
   * Retourne les tags d'un texte : les N mots avec le meilleur score.
   * En cas d'égalité de score, les mots sont départagés en ordre
   * alphabétique.
   * @param {string} text texte à analyser
   * @returns {string[]} tableau des N tags du texte
   */
  getTags(text) {
    // TODO : tokenize -> computeFrequency -> calculer le score de chaque mot
    // avec computeScore -> trier -> garder les N premiers -> retourner les
    // mots. Aucune boucle for/while permise.
    const tokens = this.tokenize(text);
    const frequencies = this.computeFrequency(tokens);

    return Object.entries(frequencies)
      .map(([word, count]) => ({
        word, 
        score: this.computeScore({ word, count, tokenCount: tokens.length }),
      }))
      .sort((a,b) => b.score - a.score || a.word.localeCompare(b.word))
      .slice(0, this.tagCount)
      .map(({word}) => word);
  }
}
