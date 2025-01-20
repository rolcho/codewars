import { describe, expect, it } from "vitest";
import { positiveSum } from "./sum-of-positive";

describe("should return positive sum", () => {
  it("should return sum if array is not empty", () => {
    const input = [1, -4, 7, 12];
    const output = 20;

    const result = positiveSum(input);
    expect(result).toBe(output);
  });
  it("should return 0 if array is empty", () => {
    const input: Array<number> = [];
    const output = 0;

    const result = positiveSum(input);
    expect(result).toBe(output);
  });
  it("should return 0 if contains only negative", () => {
    const input = [-1, -2, -3];
    const output = 0;

    const result = positiveSum(input);
    expect(result).toBe(output);
  });
});
