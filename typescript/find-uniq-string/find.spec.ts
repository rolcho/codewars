import { describe, expect, it } from '@jest/globals';
import { findUniq } from './find';

describe('Find uniq words', () => {
  it("should return 'BbBb", () => {
    const strings = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
    const expectedResult = 'BbBb';

    const result = findUniq(strings);

    expect(result).toBe(expectedResult);
  });

  it("should return 'foo", () => {
    const strings = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'];
    const expectedResult = 'foo';

    const result = findUniq(strings);

    expect(result).toBe(expectedResult);
  });
});
