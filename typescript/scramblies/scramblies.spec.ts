/*
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/
import { describe, expect, it } from "@jest/globals";
import { scramble } from "./scramblies";

describe("check word letters in letters", () => {
  it("should return true if letters has all the letters", () => {
    const letters = "cedewaraaossoqqyt";
    const word = "codewars";
    const expectedResult = true;

    const result = scramble(letters, word);

    expect(result).toBe(expectedResult);
  });
  it("should return true if letters has all the letters", () => {
    const letters = "rkqodlw";
    const word = "world";
    const expectedResult = true;

    const result = scramble(letters, word);

    expect(result).toBe(expectedResult);
  });
  it("should return false if letters hasn't all the letters", () => {
    const letters = "katas";
    const word = "steak";
    const expectedResult = false;

    const result = scramble(letters, word);

    expect(result).toBe(expectedResult);
  });
});
