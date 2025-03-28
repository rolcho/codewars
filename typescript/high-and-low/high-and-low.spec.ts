import { describe, expect, it } from '@jest/globals';
import { Kata } from './high-and-low';

describe('return high and low as string', () => {
  it("should retrun '5 1'", () => {
    expect(Kata.highAndLow('1 2 3 4 5')).toBe('5 1');
  });
  it("should retrun '5 -3'", () => {
    expect(Kata.highAndLow('1 2 -3 4 5')).toBe('5 -3');
  }); // return "5 -3"
  it("should retrun '9 -5'", () => {
    expect(Kata.highAndLow('1 9 3 4 -5')).toBe('9 -5');
  }); // return "9 -5"
});
