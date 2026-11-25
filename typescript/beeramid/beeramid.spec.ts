/*
referral bonus ------> 1500
price of a beer can -> 2
expected output -----> 12

referral bonus ------> 5000
price of a beer can -> 3
expected output -----> 16 */

import { describe, expect, it } from 'vitest';
import { beeramid } from './beeramid';

describe('count levels', () => {
  it('should have 12 levels, from 1500 bonus at 2 price', () => {
    const bonus = 1500;
    const price = 2;
    const expected = 12;

    const result = beeramid(bonus, price);

    expect(result).toBe(expected);
  });
  it('should have 16 levels, from 5000 bonus at 3 price', () => {
    const bonus = 5000;
    const price = 3;
    const expected = 16;

    const result = beeramid(bonus, price);

    expect(result).toBe(expected);
  });
  it('should have 0 level, from 5 bonus at 10 price', () => {
    const bonus = 5;
    const price = 10;
    const expected = 0;

    const result = beeramid(bonus, price);

    expect(result).toBe(expected);
  });
});
