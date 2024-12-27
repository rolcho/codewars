export function score(dice: number[]): number {
  const diceMap = new Map<number, number>();
  for (const d of dice) {
    diceMap.set(d, (diceMap.get(d) || 0) + 1);
  }
  let sum = 0;

  for (const [k, v] of diceMap) {
    if (v < 3) continue;
    diceMap.set(k, v - 3);
    sum += k === 1 ? 1000 : k * 100;
  }

  if (diceMap.has(1) && diceMap.get(1)! < 3) sum += diceMap.get(1)! * 100;
  if (diceMap.has(5) && diceMap.get(5)! < 3) sum += diceMap.get(5)! * 50;

  return sum;
}

const dices = [
  [5, 1, 3, 4, 1],
  [1, 1, 1, 3, 1],
  [2, 4, 4, 5, 4],
];
for (const dice of dices) {
  console.log(dice);
  console.log(score(dice));
}
