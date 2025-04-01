export function arrayToString(arr: number[]): string {
  console.log(arr.flat());
  return '';
}

export function stringToArray(str: string): number[] {
  const getElementsFromString = (s: string): string[] => {
    return s.split(',');
  };

  type Iteration = { start: number; iteration: number; increment: number };

  const splitSlice = (startAndIteration: string, inc: string): Iteration => {
    const [startStr, iterationStr] = startAndIteration.split(':');
    const start = Number.parseInt(startStr);
    const iteration = Number.parseInt(iterationStr);
    const increment = Number.parseInt(inc);
    return { start, iteration, increment };
  };

  const createArray = (i: Iteration): number[] => {
    const { start, iteration, increment } = i;
    const filledArray: number[] = [];
    for (let i = 0; i < iteration; i++) {
      filledArray.push(start + increment * i);
    }
    return filledArray;
  };

  const getArrayFromSlice = (s: string): number[] => {
    const [startAndIterationPlus, incrementNumber] = s.split('+');
    if (startAndIterationPlus !== s) {
      const { start, iteration, increment } = splitSlice(
        startAndIterationPlus,
        incrementNumber,
      );
      return createArray({ start, iteration, increment });
    }
    const [startAndIterationMinus, decrementNumber] = s.split('-');
    if (startAndIterationMinus !== s) {
      const { start, iteration, increment } = splitSlice(
        startAndIterationMinus,
        decrementNumber,
      );
      return createArray({ start, iteration, increment: -increment });
    }
    const { start, iteration, increment } = splitSlice(s, '0');
    if (Number.isNaN(iteration)) return [Number.parseInt(s)];
    return createArray({ start, iteration, increment });
  };

  const numbers: number[] = [];
  const items = getElementsFromString(str);
  for (const item of items) {
    const numbersSlice = getArrayFromSlice(item);
    numbers.push(...numbersSlice);
  }
  return numbers;
}

console.log(stringToArray('1:3+1,6:6-2,9,5:3,8'));
