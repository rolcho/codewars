import { describe, it, expect } from '@jest/globals';
import { validBraces } from './valid-braces';

describe('check valid braces', () => {
  it('should return true if barces are empty', () => {
    const emptyBraces = '';

    const result = validBraces(emptyBraces);

    expect(result).toBe(true);
  });

  it('should return true if brace pairs are correct', () => {
    const validBracePairs = '{[]()}';

    const result = validBraces(validBracePairs);

    expect(result).toBe(true);
  });

  it('should return false if brace pairs are incorrect', () => {
    const validBracePairs = '{[(])}';

    const result = validBraces(validBracePairs);

    expect(result).toBe(false);
  });

  it("should return false if brace pairs don't close", () => {
    const validBracePairs = '{[(][}';

    const result = validBraces(validBracePairs);

    expect(result).toBe(false);
  });
});
