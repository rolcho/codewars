import { describe, expect, it } from "vitest";
import { evenOrOdd } from "./even-or-odd";

describe("return even or odd", () => {
  it("should return 'even' if number is even", () => {
    const evenNumber = Math.floor((Math.random() * 1_000_000) / 2) * 2;
    expect(evenOrOdd(evenNumber)).toBe("even");
  });
  it("should return 'odd' if number is odd", () => {
    const oddNumber = Math.floor((Math.random() * 1_000_000) / 2) * 2 + 1;
    expect(evenOrOdd(oddNumber)).toBe("odd");
  });
  it("should return 'even' if number is 0", () => {
    expect(evenOrOdd(0)).toBe("even");
  });
});
