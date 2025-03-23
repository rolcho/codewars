/**
 * Counts the number of bits set to 1 in the binary representation of a number.
 *
 * @param n - The number to count bits for
 * @returns The number of 1 bits in the binary representation of n
 */
export function countBits(n: number): number {
  let x = n;
  let count = 0;
  while (x > 0) {
    count += x % 2;
    x = Math.floor(x / 2);
  }
  return count;
}
