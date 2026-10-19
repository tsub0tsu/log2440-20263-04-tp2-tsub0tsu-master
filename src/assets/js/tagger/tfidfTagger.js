/**
 * Générateur de tags basé sur l'algorithme TF-IDF.
 * Score d'un mot dépend du corpus entier :
 * un mot fréquent dans un texte, mais rare dans le corpus, obtient un score
 * élevé. Les mots communs ("le", "de", etc.) obtiennent un score proche de zéro.
 * TODO : lier les 2 classes : TfIdTagger et Tagger
 */
import Tagger from "./tagger.js";
export default class TfIdfTagger extends Tagger {
  // Fréquence documentaire de chaque mot du corpus
  #docFrequency;

  /**
   * TODO : lier les 2 classes : TfIdTagger et Tagger
   * @param {Array<{content:string}>} corpus tableau de textes du corpus
   * @param {number} tagCount nombre de tags à produire par texte
   */
  constructor(corpus, tagCount = 3) {
    super(corpus, tagCount);
    this.#docFrequency = this.#computeDocFrequency();
  }

  /**
   * TODO : Compléter la fonction
   * Calcule la fréquence documentaire de chaque mot du corpus : le nombre
   * de textes (documents) qui contiennent le mot au moins une fois.
   * Attention : ce n'est pas le nombre total d'occurrences du mot.
   * @returns {Object.<string, number>} objet { mot: nombre de textes contenant le mot }
   */
  #computeDocFrequency() {
    // TODO : pour chaque texte, compter chaque mot une seule fois même s'il
    // apparaît plusieurs fois (utiliser un Set). Aucune boucle for/while.
    const uniqueWordsPerText = this.corpus.flatMap((text) => [...new Set(this.tokenize(text.content))]);
    return this.computeFrequency(uniqueWordsPerText);
  }

  /**
   * Calcule le score TF-IDF d'un mot dans un texte. Pour un mot m dans un
   * texte t :
   * 
   *   TF(m, t) = occurrences de m dans t / nombre total de tokens de t
   * 
   *   IDF(m) = log(taille du corpus / nombre de textes contenant m)
   * 
   *   score(m, t) = TF(m, t) * IDF(m)
   * @param {Object} context contexte du mot à évaluer
   * @param {string} context.word mot à évaluer (doit faire partie du corpus)
   * @param {number} context.count nombre d'occurrences du mot dans le texte
   * @param {number} context.tokenCount nombre total de tokens du texte
   * @returns {number} score TF-IDF du mot
   */
  computeScore({ word, count, tokenCount }) {
    // TODO : compléter la fonction en utilisant la formule TF-IDF.
    const tf = count/tokenCount;
    const idf = Math.log(this.corpus.length / this.#docFrequency[word]);
    return tf * idf;
  }
}
