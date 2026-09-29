import { computeAverageTextLength, createTagFilter } from "../src/assets/js/library/utils.js";

describe("Utils tests", () => {
  describe("createTagFilter", () => {
    const texts = [
      { id: 1, content: "Texte sur JS", tags: ["javascript", "web"] },
      { id: 2, content: "Texte sur SQL", tags: ["sql"] },
      { id: 3, content: "Texte sans tags", tags: [] },
    ];

    it("should return a function", () => {
      const filter = createTagFilter("javascript");

      expect(typeof filter).toBe("function");
    });

    it("should return true for a text that has the tag, false otherwise", () => {
      const filter = createTagFilter("javascript");

      expect(filter(texts[0])).toBe(true);
      expect(filter(texts[1])).toBe(false);
      expect(filter(texts[2])).toBe(false);
    });

    it("should be usable as a callback for a filter method", () => {
      const filtered = texts.filter(createTagFilter("sql"));

      expect(filtered).toEqual([texts[1]]);
    });
  });

  describe("computeAverageTextLength", () => {
    it("should compute the average length of the texts", () => {
      const texts = [
        { id: 1, content: "abcd" },
        { id: 2, content: "ab" },
      ];

      expect(computeAverageTextLength(texts)).toBe(3);
    });

    it("should return 0 for an empty list", () => {
      expect(computeAverageTextLength([])).toBe(0);
    });
  });
});
