/**
 * Generates an infinite sequence of Fibonacci numbers using BigInt.
 *
 * @yields The next Fibonacci number in the sequence.
 */
export function* fibonacciSequence(): Iterator<bigint> {
  let previous = 0n;
  let current = 1n;
  while (true) {
    yield current;
    [previous, current] = [current, previous + current];
  }
}
