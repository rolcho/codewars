import { describe, expect, it } from '@jest/globals';
import { calc } from './rpnc';

describe('Calculate result', () => {
  it('should calculate the right value', () => {
    const expression = '5 1 2 + 4 * + 3 - 2 /';

    const result = calc(expression);

    expect(result).toBe(7);
  });

  it('should return 0 if expression is empty', () => {
    const emptyExpression = '';

    const result = calc(emptyExpression);

    expect(result).toBe(0);
  });
});
