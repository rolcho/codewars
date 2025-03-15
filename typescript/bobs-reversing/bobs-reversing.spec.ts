import { describe, it, expect } from "@jest/globals";
import { decoder } from "./bobs-reversing";

describe("decoder", () => {
  it("should decode text properly", () => {
    const encoded1 = "hea|ed|rt|oc";
    const marker = "|";
    const decoded = "heartcode";
    expect(decoder(encoded1, marker)).toBe(decoded);
  });
});
