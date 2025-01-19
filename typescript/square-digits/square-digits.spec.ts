import { describe, expect, it } from "vitest";
import { Kata } from "./square-digits";
/*
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
*/
describe("square digits", () => {
  it("should return 811181 for 9119", () => {
    expect(Kata.squareDigits(9119)).toBe(811181);
  });
  it("should return 493625 for 765", () => {
    expect(Kata.squareDigits(765)).toBe(493625);
  });
});
