/**
 * Represents a matrix as a two-dimensional array of numbers.
 */
export type matrix = number[][];

/**
 * Adds two matrices together element by element.
 *
 * @param a - The first matrix to add
 * @param b - The second matrix to add
 * @returns The resulting matrix from adding matrices a and b.
 *          Returns a matrix with a single empty array if the dimensions don't match.
 */
export function matrixAddition(a: matrix, b: matrix): matrix {
  const sum: matrix = [];
  const rows = a.length;
  const columns = a[0].length;

  if (b.length !== rows) return [[]];

  for (let row = 0; row < a.length; row++) {
    if (a[row].length !== columns || b[row].length !== columns) return [[]];
    const line: number[] = [];
    for (let column = 0; column < a[row].length; column++) {
      line.push(a[row][column] + b[row][column]);
    }
    sum.push(line);
  }
  return sum;
}
