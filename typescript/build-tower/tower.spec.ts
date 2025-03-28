import { towerBuilder } from './tower.ts';
import { it, describe, expect } from '@jest/globals';

describe('test build pyramid', () => {
  it('should return 3 element array at height 3', () => {
    const goodResult = {
      size: 3,
      stringArray: ['  *  ', ' *** ', '*****'],
    };
    expect(towerBuilder(goodResult.size)).toEqual(goodResult.stringArray);
  });

  it('should return empty array at 0 height', () => {
    expect(towerBuilder(0).length).toBe(0);
  });
});
