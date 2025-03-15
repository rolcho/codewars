import { describe, expect, it } from "@jest/globals";
import { getScore } from "./zonk";

describe("getScore", () => {
  const num = Math.floor(Math.random() * 5) + 2;
  const items = Math.floor(Math.random() * 4) + 3;

  it("returns 0 for an empty collection", () => {
    const dice: number[] = [];
    expect(getScore(dice)).toBe(0);
  });

  it("returns 1000 for a straight line", () => {
    const dice = [1, 2, 3, 4, 5, 6];
    expect(getScore(dice)).toBe(1000);
  });

  it("returns 750 for three pairs", () => {
    const dice = [2, 2, 1, 1, 3, 3];
    expect(getScore(dice)).toBe(750);
  });

  it(`returns ${items - 2}000 for ${items} ones`, () => {
    const dice = new Array<number>(items).fill(1);
    expect(getScore(dice)).toBe((dice.length - 2) * 1000);
  });

  it(`returns ${num * (items - 2)}00 for ${items} of ${num}`, () => {
    const dice = new Array<number>(items).fill(num);
    expect(getScore(dice)).toBe(num * (items - 2) * 100);
  });

  it("returns 200 for two ones", () => {
    const dice = [1, 3, 1, 4, 2];
    expect(getScore(dice)).toBe(200);
  });

  it("returns 100 for two fives", () => {
    const dice = [5, 2, 4, 6, 5];
    expect(getScore(dice)).toBe(100);
  });
});
