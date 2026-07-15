import { describe, expect, it } from 'vitest';
import { findUniq } from './find';

describe('Find uniq words', () => {
  it("should return 'BbBb", () => {
    const strings = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
    const expectedResult = 'BbBb';

    const result = findUniq(strings);

    expect(result).toBe(expectedResult);
  });

  it("should return 'foo' in array", () => {
    const strings = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'];
    const expectedResult = 'foo';

    const result = findUniq(strings);

    expect(result).toBe(expectedResult);
  });

  it("should return 'foo' for foo first", () => {
    const strings = ['foo', 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    const expectedResult = 'foo';

    const result = findUniq(strings);

    expect(result).toBe(expectedResult);
  });

  it("should return 'foo' for foo second", () => {
    const strings = ['abc', 'foo', 'acb', 'bac', 'bca', 'cab', 'cba'];
    const expectedResult = 'foo';

    const result = findUniq(strings);

    expect(result).toBe(expectedResult);
  });

  it('should handle strings with only spaces', () => {
    const strings = ['   ', '   ', '   ', '   ', '   '];
    const expectedResult = '';
    expect(findUniq(strings)).toBe(expectedResult);
  });
});
