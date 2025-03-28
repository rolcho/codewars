import { type matrix, matrixAddition } from './add-matrices';
import { describe, it, expect } from '@jest/globals';

describe('Sum two square matrices', () => {
  it('should return the correct sum of two 3 by 3 matrices', () => {
    const mA: matrix = [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ];
    const mB: matrix = [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ];
    const mSum: matrix = [
      [3, 4, 4],
      [6, 4, 4],
      [2, 2, 4],
    ];

    const sum = matrixAddition(mA, mB);

    expect(mSum).toStrictEqual(sum);
  });

  it('should return empty matrix for different column count', () => {
    const mA: matrix = [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ];
    const mB: matrix = [
      [2, 2, 1],
      [3, 2, 3, 4],
      [1, 1, 3],
    ];
    const mSum: matrix = [[]];

    const sum = matrixAddition(mA, mB);

    expect(mSum).toStrictEqual(sum);
  });

  it('should return empty matrix for different matrix size', () => {
    const mA: matrix = [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ];
    const mB: matrix = [
      [2, 2],
      [3, 2],
    ];
    const mSum: matrix = [[]];

    const sum = matrixAddition(mA, mB);

    expect(mSum).toStrictEqual(sum);
  });

  it('should return empty matrix for non square matrix', () => {
    const mA: matrix = [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ];
    const mB: matrix = [
      [2, 2],
      [3, 2],
      [1, 1],
    ];
    const mSum: matrix = [[]];

    const sum = matrixAddition(mA, mB);

    expect(mSum).toStrictEqual(sum);
  });
});
