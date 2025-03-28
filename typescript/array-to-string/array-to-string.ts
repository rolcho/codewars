export function arrayToString(arr: number[]): string {
  return '';
}

export function stringToArray(str: string): number[] {
  const getElementsFromString = (s: string): string[] => {
    return s.split(',');
  }
  const getArrayFromSlice = (s: string): number[] => {
    const increment = s.split('+')[1];
    const decrement = s.split('-')[1];

    if (increment === decrement) return [Number.parseInt(s))];

    const [startNumber, 
  }
  const numbers: number[] = [];
  const items = getElementsFromString(str);
  for (const item of items) {
    const numbersSlice = []
    numbers.push(...numbersSlice);
  }
  return [0];
}
