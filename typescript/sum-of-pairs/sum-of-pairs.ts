/**
 * Finds a pair of numbers in an array that sum up to a given value.
 * If multiple pairs exist, returns the pair where the second element has the lowest index.
 *
 * @param ints - Array of integers to search for pairs
 * @param s - The target sum value
 * @returns A tuple containing the pair of numbers that sum to the target, or undefined if no such pair exists
 */
export function sumPairs(
  ints: number[],
  s: number,
): [number, number] | undefined {
  const seen = new Map<number, number>();
  let result: [number, number] | undefined;
  let lowestRightIndex = Infinity;

  for (let i = 0; i < ints.length; i++) {
    const current = ints[i];
    const complement = s - current;

    if (seen.has(complement)) {
      const leftIndex = seen.get(complement)!;
      if (i < lowestRightIndex) {
        lowestRightIndex = i;
        result = [ints[leftIndex], current];
      }
    }

    if (!seen.has(current)) {
      seen.set(current, i);
    }
  }

  return result;
}
