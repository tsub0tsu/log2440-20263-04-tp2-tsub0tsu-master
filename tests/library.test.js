/* eslint-disable no-magic-numbers */
import Library from "../src/assets/js/library/library.js";

describe("Library tests", () => {
  let library;

  beforeEach(() => {
    library = new Library([
      { id: 1, content: "Le chat dort" },
      { id: 2, content: "Le chien mange" },
    ]);
  });

  describe("constructor", () => {

    it("should create an empty library if no argument is given", () => {
      const emptyLibrary = new Library();

      expect(emptyLibrary.texts).toEqual([]);
    });

    it("should add an empty tag list to texts without tags", () => {
      expect(library.texts[0].tags).toEqual([]);
      expect(library.texts[1].tags).toEqual([]);
    });

    it("should preserve the existing tags of a text", () => {
      const taggedLibrary = new Library([{ id: 1, content: "Le chat dort", tags: ["chat"] }]);

      expect(taggedLibrary.texts[0].tags).toEqual(["chat"]);
    });
  });

  describe("addText", () => {
    it("should add a new text with an empty tag list and incremented id", () => {
      library.addText("Le poisson nage");

      expect(library.texts.length).toBe(3);
      expect(library.texts[2].id).toBe(3);
      expect(library.texts[2].content).toBe("Le poisson nage");
      expect(library.texts[2].tags).toEqual([]);
    });

    it("should compute the new id from the maximal id, not the list length", () => {
      library.removeText(1);
      library.addText("Le poisson nage");

      expect(library.getText(3)).toBeDefined();
    });

  });

  describe("removeText", () => {
    it("should remove the text with the given id", () => {
      library.removeText(1);

      expect(library.texts.length).toBe(1);
      expect(library.texts[0].id).toBe(2);
    });

    it("should not modify the library for an unknown id", () => {
      library.removeText(42);

      expect(library.texts.length).toBe(2);
    });
  });

  describe("getText", () => {
    it("should return the text with the given id", () => {
      const text = library.getText(2);

      expect(text.content).toBe("Le chien mange");
    });

    it("should return undefined for an unknown id", () => {
      expect(library.getText(42)).toBeUndefined();
    });
  });

  describe("tagAll", () => {
    it("should replace the tags of every text with the tags of the tagger", () => {
      const taggerStub = { getTags: (content) => [content.split(" ")[1].toLowerCase()] };
      library.tagAll(taggerStub);

      expect(library.texts[0].tags).toEqual(["chat"]);
      expect(library.texts[1].tags).toEqual(["chien"]);
    });

  });

  describe("filter", () => {
    it("should return a new Library instance", () => {
      const filtered = library.filter(() => true);

      expect(filtered).toBeInstanceOf(Library);
      expect(filtered).not.toBe(library);
    });

    it("should keep only the texts that match the predicate", () => {
      const filtered = library.filter((text) => text.content.length <= library.texts[0].content.length);

      expect(filtered.texts.length).toBe(1);
      expect(filtered.texts[0].id).toBe(1);
    });
  });
});
