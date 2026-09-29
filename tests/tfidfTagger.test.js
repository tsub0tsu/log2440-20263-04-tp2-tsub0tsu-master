/* eslint-disable no-magic-numbers */
import Tagger from "../src/assets/js/tagger/tagger.js";
import TfIdfTagger from "../src/assets/js/tagger/tfidfTagger.js";

describe("TfIdfTagger tests", () => {
  // Corpus de 3 textes : "le" apparaît dans tous les textes, "chat"
  // seulement dans le premier, "dort" et "poisson" dans 2 textes sur 3.
  const corpus = [
    { id: 1, content: "le chat dort et le chat mange et le poisson" },
    { id: 2, content: "le chien dort dehors" },
    { id: 3, content: "le poisson nage" },
  ];

  describe("constructor and inheritance", () => {
    it("should be a Tagger", () => {
      const tagger = new TfIdfTagger(corpus);
      
      expect(tagger).toBeInstanceOf(Tagger);
    });

    it("should reuse the inherited tokenize without overriding it", () => {
      const tagger = new TfIdfTagger(corpus);
      
      expect(tagger.tokenize("Le Chat, dort!")).toEqual(["le", "chat", "dort"]);
    });
  });

  describe("computeScore", () => {
    const tagger = new TfIdfTagger(corpus);

    it("should give a score of 0 to a word present in every text", () => {
      expect(tagger.computeScore({ word: "le", count: 3, tokenCount: 10 })).toBe(0);
    });

    it("should multiply the TF of the parent class by the IDF of the word", () => {
      // "chat" apparaît dans 1 texte sur 3 : IDF = ln(3/1)
      const COUNT = 2;
      const TOKEN_COUNT = 10;
      const expected = (COUNT / TOKEN_COUNT) * Math.log(3 / 1);
      
      expect(tagger.computeScore({ word: "chat", count: COUNT, tokenCount: TOKEN_COUNT })).toBeCloseTo(expected, 10);
    });

    it("should give a higher score to a word that appears more frequently in the text", () => {
      // TF plus élevé pour "chat" que pour "poisson", même si IDF égal
      const expected = (2 / 10) * Math.log(3);
      
      expect(tagger.computeScore({ word: "chat", count: 2, tokenCount: 10 })).toBeCloseTo(expected, 10);
    });

    it("should give a lower IDF to a word present in more texts", () => {
      // "dort" (2 textes) vs "chat" (1 texte), à TF égal
      const chatScore = tagger.computeScore({ word: "chat", count: 1, tokenCount: 10 });
      const dortScore = tagger.computeScore({ word: "dort", count: 1, tokenCount: 10 });
      
      expect(dortScore).toBeLessThan(chatScore);
      expect(dortScore).toBeGreaterThan(0);
    });
  });

  describe("getTags", () => {
    it("should not tag a text with a word present in every text", () => {
      const tagger = new TfIdfTagger(corpus, 3);
      const tags = tagger.getTags(corpus[0].content);
      
      expect(tags).not.toContain("le");
    });

    it("should return the words with the best TF-IDF scores in order", () => {
      const tagger = new TfIdfTagger(corpus, 3);
      
      // Scores du texte 1 : chat = et > mange > dort = poisson > le.
      expect(tagger.getTags(corpus[0].content)).toEqual(["chat", "et", "mange"]);
    });

    it("should produce different tags than the naive tagger on the same text", () => {
      const naiveTagger = new Tagger(corpus, 1);
      const tfidfTagger = new TfIdfTagger(corpus, 1);
      
      expect(naiveTagger.getTags(corpus[0].content)).toEqual(["le"]);
      expect(tfidfTagger.getTags(corpus[0].content)).toEqual(["chat"]);
    });
  });
});
