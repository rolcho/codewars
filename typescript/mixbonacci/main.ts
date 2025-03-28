type SequenceType = 'fib' | 'pel' | 'pad' | 'jac' | 'tri' | 'tet';

export function mixbonacci(pattern: SequenceType[], length: number): number[] {
  if (pattern.length === 0 || length === 0) return [];

  function* fibonacci(): Generator<number> {
    let prev = 0;
    let curr = 1;
    while (true) {
      yield prev;
      [prev, curr] = [curr, curr + prev];
    }
  }

  function* pell(): Generator<number> {
    let prev = 0;
    let curr = 1;
    while (true) {
      yield prev;
      [prev, curr] = [curr, 2 * curr + prev];
    }
  }

  function* padovan(): Generator<number> {
    let prev2 = 1;
    let prev1 = 0;
    let curr = 0;
    while (true) {
      yield prev2;
      [prev2, prev1, curr] = [prev1, curr, prev2 + prev1];
    }
  }

  function* jacobsthal(): Generator<number> {
    let prev2 = 0;
    let prev1 = 1;
    let curr = prev1 + 2 * prev2;
    while (true) {
      yield prev2;
      [prev2, prev1, curr] = [prev1, curr, curr + 2 * prev1];
    }
  }

  function* tribonacci(): Generator<number> {
    let prev2 = 0;
    let prev1 = 0;
    let curr = 1;
    while (true) {
      yield prev2;
      [prev2, prev1, curr] = [prev1, curr, curr + prev1 + prev2];
    }
  }

  function* tetrabonacci(): Generator<number> {
    let prev3 = 0;
    let prev2 = 0;
    let prev1 = 0;
    let curr = 1;
    while (true) {
      yield prev3;
      [prev3, prev2, prev1, curr] = [
        prev2,
        prev1,
        curr,
        curr + prev1 + prev2 + prev3,
      ];
    }
  }

  const results: number[] = [];

  const calculate: Record<SequenceType, Generator<number>> = {
    fib: fibonacci(),
    pel: pell(),
    pad: padovan(),
    jac: jacobsthal(),
    tri: tribonacci(),
    tet: tetrabonacci(),
  };
  for (let i = 0; i < length; i++) {
    const sequence = pattern[i % pattern.length];
    const result = calculate[sequence].next().value;
    results.push(result);
  }
  return results;
}

console.log({
  results: mixbonacci(['fib', 'pad', 'pel'], 6),
});
