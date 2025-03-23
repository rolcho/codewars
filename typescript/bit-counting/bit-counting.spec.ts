import { describe, it, expect } from "@jest/globals";
import { countBits } from "./bit-counting";

describe("count 1 digits in number converted to binary", () => {
  it("should return 0 for 0", () => {
    const expected = 0;
    const result = countBits(0);
    expect(result).toBe(expected);
  });
  it("should return 1 for 4 (bits: 100)", () => {
    const expected = 1;
    const result = countBits(4);
    expect(result).toBe(expected);
  });
  it("should return 3 for 7 (bits: 111)", () => {
    const expected = 3;
    const result = countBits(7);
    expect(result).toBe(expected);
  });
  it("should return 2 for 9 (bits: 1001)", () => {
    const expected = 2;
    const result = countBits(9);
    expect(result).toBe(expected);
  });
  it("should return 2 for 10 (bits: 1010)", () => {
    const expected = 2;
    const result = countBits(10);
    expect(result).toBe(expected);
  });
});
