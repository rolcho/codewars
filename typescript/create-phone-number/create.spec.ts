import { describe, expect, it } from "@jest/globals";
import { createPhoneNumber } from "./create";

describe("Create phone number", () => {
  it("should throw error when not exactly 10 digits", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let errorOccured = true;
    try {
      createPhoneNumber(numbers);
      errorOccured = false;
    } catch (error) {
      const { message } = error as Error;
      expect(message).toBe("Invalid number of digits");
    }
    expect(errorOccured).toBe(true);
  });

  it("should throw error when float number occur", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9.2, 0];
    let errorOccured = true;
    try {
      createPhoneNumber(numbers);
      errorOccured = false;
    } catch (error) {
      const { message } = error as Error;
      expect(message).toBe("Invalid digit");
    }
    expect(errorOccured).toBe(true);
  });

  it("should throw error when negative number occur", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, -2, 0];
    let errorOccured = true;
    try {
      createPhoneNumber(numbers);
      errorOccured = false;
    } catch (error) {
      const { message } = error as Error;
      expect(message).toBe("Invalid digit");
    }
    expect(errorOccured).toBe(true);
  });

  it("should return phone number from array of string", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const expected = "(123) 456-7890";
    const result = createPhoneNumber(numbers);

    expect(typeof result).toBe("string");
    expect(result).toBe(expected);
  });
});
