import corpus from "./corpus.js";
import Library from "./library/library.js";
import UI from "./ui/ui.js";

// Point d'entrée de l'application
const library = new Library(corpus);
const ui = new UI(library);

ui.displayTexts(library);
ui.bindListeners();
