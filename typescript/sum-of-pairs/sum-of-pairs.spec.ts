import { describe, expect, it } from "@jest/globals";
import { sumPairs } from "./sum-of-pairs";

describe("Sum of pairs", () => {
  it("should return the correct value if 11, 3, 7, 5] has pairs", () => {
    const array = [11, 3, 7, 5];
    const sum = 10;
    const numbers = [3, 7];

    const result = sumPairs(array, sum);

    expect(result).toStrictEqual(numbers);
  });
  it("should return the correct value if [4, 3, 2, 3, 4] has pairs", () => {
    const array = [4, 3, 2, 3, 4];
    const sum = 6;
    const numbers = [4, 2];

    const result = sumPairs(array, sum);

    expect(result).toStrictEqual(numbers);
  });
  it("should return the correct value if [10, 5, 2, 3, 7, 5] has pairs", () => {
    const array = [10, 5, 2, 3, 7, 5];
    const sum = 10;
    const numbers = [3, 7];

    const result = sumPairs(array, sum);

    expect(result).toStrictEqual(numbers);
  });
  it("should return undefined if hasn't got pairs", () => {
    const array = [0, 0, -2, 3];
    const sum = 2;

    const result = sumPairs(array, sum);

    expect(result).toStrictEqual(undefined);
  });
});
