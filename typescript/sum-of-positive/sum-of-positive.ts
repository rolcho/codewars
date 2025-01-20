export function positiveSum(arr: number[]): number {
  if (arr.length === 0) return 0;
  const result = arr.filter((n) => n > 0).reduce((a, c) => a + c, 0);
  return result;
}
