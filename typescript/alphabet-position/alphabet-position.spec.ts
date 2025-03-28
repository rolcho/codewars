import { describe, it, expect } from '@jest/globals';
import { alphabetPosition } from './alphabet-position';

describe('Function should make alphabet positions from letters', () => {
  it('should return the alphabet positions in correct order.', () => {
    const test1 = "The sunset sets at twelve o' clock.";
    const expected1 =
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11';

    const result1 = alphabetPosition(test1);

    expect(result1).toBe(expected1);
  });
});
