export function sumPairs(
  ints: number[],
  s: number,
): [number, number] | undefined {
  type PairInfo = {
    firstIndex?: number;
    secondIndex?: number;
  };
  const numberPairs: Record<number, PairInfo> = {};

  for (const [i, int] of ints.entries()) {
    if (!numberPairs[int]) {
      numberPairs[s - int] = { firstIndex: i };
      continue;
    }
    //if (!numberPairs[int].secondIndex) numberPairs[int].secondIndex = i;
  }

  let lowestIndeces: [number, number] | undefined;

  for (const [_, v] of Object.entries(numberPairs)) {
    if (!v.firstIndex || !v.secondIndex) continue;
    if (!lowestIndeces) {
      lowestIndeces = [v.firstIndex, v.secondIndex];
      continue;
    }
    if (v.secondIndex < lowestIndeces[1])
      lowestIndeces = [v.firstIndex, v.secondIndex];
  }

  console.log({ numberPairs, lowestIndeces });
  return lowestIndeces
    ? [ints[lowestIndeces[0]], ints[lowestIndeces[1]]]
    : undefined;
}
