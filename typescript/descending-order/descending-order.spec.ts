import { describe, expect, it } from "@jest/globals";
import { descendingOrder } from "./descending-order";

describe("Digits in descending order", () => {
  it("should output 54421 for input 42145", () => {
    const input = 42145;
    const output = 54421;

    const result = descendingOrder(input);

    expect(result).toBe(output);
  });

  it("should output 654321 for input 145263", () => {
    const input = 145263;
    const output = 654321;

    const result = descendingOrder(input);

    expect(result).toBe(output);
  });

  it("should output 987654321 for input 123456789", () => {
    const input = 123456789;
    const output = 987654321;

    const result = descendingOrder(input);

    expect(result).toBe(output);
  });
});
