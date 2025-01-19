import { describe, expect, it } from "vitest";
import { evenOrOdd } from "./even-or-odd";

describe("return even or odd", () => {
  it("should return 'Even' if number is even", () => {
    const evenNumber = Math.floor((Math.random() * 1_000_000) / 2) * 2;
    expect(evenOrOdd(evenNumber)).toBe("Even");
  });
  it("should return 'Odd' if number is odd", () => {
    const oddNumber = Math.floor((Math.random() * 1_000_000) / 2) * 2 + 1;
    expect(evenOrOdd(oddNumber)).toBe("Odd");
  });
  it("should return 'Even' if number is 0", () => {
    expect(evenOrOdd(0)).toBe("Even");
  });
});
