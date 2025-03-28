import { describe, expect, it } from '@jest/globals';
import { makeNegative } from './make-negative';

describe('it should return negative', () => {
  it('should return negative when input is positive', () => {
    const input = 9;
    const output = -9;

    const result = makeNegative(input);

    expect(result).toBe(output);
  });

  it('should return negative when input is negative', () => {
    const input = -5;
    const output = -5;

    const result = makeNegative(input);

    expect(result).toBe(output);
  });

  it('should return zero when input is zero', () => {
    const input = 0;
    const output = 0;

    const result = makeNegative(input);

    expect(result).toBe(output);
  });
});
