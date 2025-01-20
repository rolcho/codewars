import { describe, expect, it } from "vitest";
import { makeNegative } from "./make-negative";

describe("it should return negative", () => {
  it("should return negative when input is positive", () => {
    const input = 1;
    const output = -1;

    const result = makeNegative(input);

    expect(result).toBe(output);
  });

  it("should return positive when input is negative", () => {
    const input = -5;
    const output = 5;

    const result = makeNegative(input);

    expect(result).toBe(output);
  });

  it("should return zero when input is zero", () => {
    const input = 0;
    const output = 0;

    const result = makeNegative(input);

    expect(result).toBe(output);
  });
});
