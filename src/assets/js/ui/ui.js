import Tagger from "../tagger/tagger.js";
import TfIdfTagger from "../tagger/tfidfTagger.js";
import { createTagFilter } from "../library/utils.js";

/**
 * La logique de manipulation du DOM vous est majoritairement fournie : vous n'avez pas à la créer,
 * mais vous aurez à la compléter et consulter pour mieux comprendre le fonctionnement du reste du code.
 */
export default class UI {
  #library;

  /**
   * @param {Library} library bibliothèque de textes à afficher
   */
  constructor(library) {
    this.#library = library;
    console.log(this.#library.texts);
this.#library.texts[0].tags = ["tag1", "tag2"];
this.#library.texts[1].tags = ["tag2"];
console.log(this.#library.texts);

  }

  /**
   * Attache les gestionnaires d'événements de la page.
   */
  bindListeners() {
    document.getElementById("add-text-form").addEventListener("submit", (event) => {
      // Empêche le rechargement de la page lors de la soumission du formulaire
      event.preventDefault();
      const input = document.getElementById("new-text-input");
      const content = input.value.trim();
      if (content.length > 0) {
        this.#library.addText(content);
        input.value = "";
        this.displayTexts(this.#library);
        this.#updateFilterLabel(null);
      }
    });

    // TODO : ajouter des gestionnaires d'événements pour l'application des taggers
    document.getElementById("frequency-tagger-btn").addEventListener("click", () => {
      this.#applyTagger(Tagger);
    });

    // TODO : compléter le gestionnire
    document.getElementById("tfidf-tagger-btn").addEventListener("click", () => { 
      this.#applyTagger(TfIdfTagger)
    });

    // TODO : ajouter un gestionnaire d'événement pour le bouton de réinitialisation du filtre
    document.getElementById("reset-filter-btn").addEventListener("click", () => {
      this.displayTexts(this.#library);
    });
  }

  /**
   * Génère les tags de tous les textes avec la classe de tagger choisie.
   * @param {Function} TaggerClass classe de tagger à instancier
   */
  #applyTagger(TaggerClass) {
    const tagCounter = document.getElementById("tag-count-input");
    let tagCountInputValue = parseInt(tagCounter.value, 10);
    if(isNaN(tagCountInputValue) || tagCountInputValue <= 0) {
      tagCountInputValue = 3;
      tagCounter.value = tagCountInputValue;
    }

    const tagger = new TaggerClass(this.#library.texts, tagCountInputValue);
    this.#library.tagAll(tagger);
    this.displayTexts(this.#library);
  }

  /**
   * Montre que les textes qui possèdent le tag choisi.
   * @param {string} tag tag choisi par l'utilisateur
   */
  #applyTagFilter(tag) {
    const filteredLibrary = this.#library.filter(createTagFilter(tag));
    this.displayTexts(filteredLibrary);
    this.#updateFilterLabel(tag);
  }

  /**
   * Affiche les textes d'une bibliothèque dans la page.
   * @param {Library} library bibliothèque à afficher
   */
  displayTexts(library) {
    const container = document.getElementById("texts-container");
    container.innerHTML = "";
    library.texts.forEach((text) => container.appendChild(this.#createTextCard(text)));
    document.getElementById("text-count").textContent = library.texts.length;
    this.#updateFilterLabel(null);
  }

  /**
   * Construit la carte HTML d'un texte : identifiant, contenu et tags.
   * @param {{id:number, content:string, tags: string[]}} text texte à afficher
   * @returns {HTMLElement} élément HTML de la carte
   */
  #createTextCard(text) {
    const card = document.createElement("article");
    card.classList.add("text-card", "flex-column");

    // TODO : Compléter la carte du texte avec le bon texte et contenu. Consultez le fichier html pour la structure finale à obtenir.
    const title = document.createElement("span");
    title.classList.add("text-id");
    title.textContent=`Texte #${text.id}`;
    card.appendChild(title);

    const content = document.createElement("p");
    content.classList.add("text-content");
    content.textContent= text.content;
    card.appendChild(content);
    
    
    // Code fourni pour le reste de la configuration
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      this.#library.removeText(text.id);
      this.displayTexts(this.#library);
    });
    card.appendChild(deleteBtn);

    card.appendChild(this.#createTagList(text.tags));
    return card;
  }

  /**
   * Construit la liste des tags d'un texte.
   * 
   * Chaque tag est cliquable et filtre la bibliothèque sur ce tag.
   * @param {string[]} tags tags à afficher
   * @returns {HTMLElement} élément HTML de la liste de tags
   */
  #createTagList(tags) {
    const tagList = document.createElement("div");
    tagList.classList.add("tag-list");

    if (!tags.length) {
      const empty = document.createElement("span");
      empty.classList.add("no-tags");
      empty.textContent = "Aucun tag pour le moment";
      tagList.appendChild(empty);
      return tagList;
    }

    tags.forEach((tag) => {
      const pill = document.createElement("span");
      pill.classList.add("tag");
      pill.textContent = tag;
      pill.addEventListener("click", () => this.#applyTagFilter(tag));
      tagList.appendChild(pill);
    });
    return tagList;
  }

  /**
   * Met à jour le libellé du filtre actif.
   * @param {string|null} tag tag actif ou null si aucun filtre
   */
  #updateFilterLabel(tag) {
    document.getElementById("active-filter")
      .textContent = tag
        ? `Filtre actif : "${tag}"`
        : "Aucun filtre. Cliquez sur un tag pour filtrer le corpus.";
  }
}
