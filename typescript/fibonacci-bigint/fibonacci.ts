export function* fibonacciSequence(): Iterator<bigint> {
  let previous = 0n;
  let current = 1n;
  while (true) {
    yield current;
    [previous, current] = [current, previous + current];
  }
}

const stream = fibonacciSequence();
const actual = Array.from({ length: 30 }, (_) => stream.next().value);
console.log(actual);
