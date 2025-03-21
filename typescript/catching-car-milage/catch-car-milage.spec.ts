import { isInteresting } from "./catch-car-milage";
import { describe, it, expect } from "@jest/globals";

describe("isInteresting", () => {
  describe("Awesome phrases", () => {
    it("returns 2 when number matches an awesome phrase", () => {
      expect(isInteresting(1337, [1337, 256])).toBe(2);
    });

    it("returns 1 when number is 1 away from an awesome phrase", () => {
      expect(isInteresting(1336, [1337, 256])).toBe(1);
    });

    it("returns 1 when number is 2 away from an awesome phrase", () => {
      expect(isInteresting(1335, [1337, 256])).toBe(1);
    });

    it("returns 0 when number is not close to an awesome phrase", () => {
      expect(isInteresting(1334, [1337, 256])).toBe(0);
    });
  });

  describe("Followed by zeros rule", () => {
    it("returns 2 for a number followed by zeros", () => {
      expect(isInteresting(1000, [])).toBe(2);
      expect(isInteresting(90000, [])).toBe(2);
    });

    it("returns 1 for a number that will be followed by zeros in next 2 miles", () => {
      expect(isInteresting(999, [])).toBe(1);
      expect(isInteresting(998, [])).toBe(1);
    });
  });

  describe("Same digits rule", () => {
    it("returns 2 for a number with all the same digit", () => {
      expect(isInteresting(111, [])).toBe(2);
      expect(isInteresting(9999, [])).toBe(2);
    });

    it("returns 1 for a number that will have same digits in next 2 miles", () => {
      expect(isInteresting(110, [])).toBe(1);
      expect(isInteresting(109, [])).toBe(1);
    });
  });

  describe("Incrementing digits rule", () => {
    it("returns 2 for a number with sequentially incrementing digits", () => {
      expect(isInteresting(1234, [])).toBe(2);
      expect(isInteresting(7890, [])).toBe(2);
      expect(isInteresting(901, [])).toBe(2);
    });

    it("returns 1 for a number that will have incrementing digits in next 2 miles", () => {
      expect(isInteresting(1233, [])).toBe(1);
      expect(isInteresting(1232, [])).toBe(1);
    });
  });

  describe("Decrementing digits rule", () => {
    it("returns 2 for a number with sequentially decrementing digits", () => {
      expect(isInteresting(4321, [])).toBe(2);
      expect(isInteresting(9876, [])).toBe(2);
    });

    it("returns 1 for a number that will have decrementing digits in next 2 miles", () => {
      expect(isInteresting(4322, [])).toBe(1);
      expect(isInteresting(4323, [])).toBe(1);
    });
  });

  describe("Palindrome rule", () => {
    it("returns 2 for a palindrome number", () => {
      expect(isInteresting(1221, [])).toBe(2);
      expect(isInteresting(12321, [])).toBe(2);
    });

    it("returns 1 for a number that will be a palindrome in next 2 miles", () => {
      expect(isInteresting(1220, [])).toBe(1);
      expect(isInteresting(1219, [])).toBe(1);
    });
  });

  describe("Edge cases", () => {
    it("handles small numbers correctly", () => {
      expect(isInteresting(0, [])).toBe(0);
      expect(isInteresting(99, [])).toBe(0);
      expect(isInteresting(98, [])).toBe(1);
      expect(isInteresting(97, [])).toBe(0);
    });

    it("handles multiple rules at once", () => {
      expect(isInteresting(1000, [])).toBe(2);

      expect(isInteresting(999, [])).toBe(1);
    });
  });

  describe("combined rules and phrases", () => {
    it("rules take precedence over phrases when both apply", () => {
      expect(isInteresting(1000, [1000])).toBe(2);
    });

    it("handles numbers close to both rules and phrases", () => {
      expect(isInteresting(999, [1000])).toBe(1);
    });
  });
});
