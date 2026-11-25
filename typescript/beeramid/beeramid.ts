export function beeramid(bonus: number, price: number): number {
  let cans = Math.floor(bonus / price);
  if (cans === 0) return 0;
  let levels = 0;
  while (cans > 0) {
    levels++;
    cans -= levels * levels;
    if (cans < 0) levels--;
  }
  return levels;
}
