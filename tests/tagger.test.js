/* eslint-disable no-magic-numbers */
import Tagger from "../src/assets/js/tagger/tagger.js";
import { jest } from "@jest/globals";

describe("Tagger tests", () => {
  const corpus = [
    { id: 1, content: "Le chat dort et le chat mange" },
    { id: 2, content: "Le chien dort dehors" },
  ];

  describe("constructor and accessors", () => {
    it("should create a tagger with default value", () => {
      const tagger = new Tagger(corpus);
      expect(tagger.tagCount).toBe(3);
    });

    it("should not allow modifying the corpus through the accessor", () => {
      const tagger = new Tagger(corpus);
      expect(() => { tagger.corpus = []; }).toThrow(TypeError);
    });
  });

  describe("tokenize", () => {
    const tagger = new Tagger(corpus);

    it("should split a text on spaces", () => {
      expect(tagger.tokenize("le chat dort")).toEqual(["le", "chat", "dort"]);
    });

    it("should convert tokens to lowercase", () => {
      expect(tagger.tokenize("Le Chat DORT")).toEqual(["le", "chat", "dort"]);
    });

    it("should remove punctuation attached to words", () => {
      expect(tagger.tokenize("Bonjour, le monde : ça va!")).toEqual(["bonjour", "le", "monde", "ça", "va"]);
    });

    it("should keep apostrophes inside a single token", () => {
      expect(tagger.tokenize("l'algorithme est rapide")).toEqual(["l'algorithme", "est", "rapide"]);
    });
  });

  describe("computeFrequency", () => {
    const tagger = new Tagger(corpus);

    it("should count the occurrences of every token", () => {
      const tokens = ["le", "chat", "dort", "et", "le", "chat", "mange"];
      expect(tagger.computeFrequency(tokens)).toEqual({ le: 2, chat: 2, dort: 1, et: 1, mange: 1 });
    });

    it("should return an empty object for an empty token list", () => {
      expect(tagger.computeFrequency([])).toEqual({});
    });
  });

  describe("computeScore", () => {
    const tagger = new Tagger(corpus);

    it("should return the relative frequency of the word", () => {
      expect(tagger.computeScore({ word: "chat", count: 2, tokenCount: 8 })).toBe(0.25);
    });
  });

  describe("getTags", () => {
    const tagger = new Tagger(corpus, 2);

    it("should return the N most frequent words of a text", () => {
      
      const tags = tagger.getTags("le chat dort et le chat mange et le chien regarde");
      expect(tags).toEqual(["le", "chat"]);
    });

    it("should count words regardless of their casing", () => {
      expect(tagger.getTags("Chat chat CHAT dort dort")).toEqual(["chat", "dort"]);
    });

    it("should use computeScore to rank the words", () => {
      const spy = jest.spyOn(tagger, "computeScore");
      tagger.getTags("le le le chat");
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });
});
