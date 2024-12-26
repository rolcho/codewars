/*
straight => 1000
three pairs => 750
three 1 => 1000
three 2 => 200
three 3 => 300
three 4 => 400
three 5 => 500
three 6 => 600
four of => 2 x three of
five of => 3 x three of
six of => 4 x three of
every 1 => 100
every 5 => 50
*/
type Collection = Map<number, number>;

function preProcess(dice: number[]): Collection {
  const c: Collection = new Map<number, number>();
  for (const d of dice) {
    c.set(d, (c.get(d) || 0) + 1);
  }
  return c;
}

export function getScore(dice: number[]): number {
  const isStraight = (d: number[]): boolean => new Set(d).size === 6;
  if (isStraight(dice)) return 1000;

  const diceMap = preProcess(dice);

  const isThreePairs = (d: Collection): boolean =>
    d.size === 3 && Array.from(d.values()).every((v: number) => v === 2);
  if (isThreePairs(diceMap)) return 750;

  const numberOfSame = (d: Collection, n: number): number => {
    let subSum = 0;
    const multiply = n - 2;
    for (const [k, v] of d) {
      if (v === n) {
        k === 1 ? (subSum += 1000 * multiply) : (subSum += k * 100 * multiply);
      }
    }
    return subSum;
  };
  let sum = 0;

  sum += numberOfSame(diceMap, 6);
  if (sum > 0) return sum;

  sum += numberOfSame(diceMap, 5);
  sum += numberOfSame(diceMap, 4);
  sum += numberOfSame(diceMap, 3);

  if (diceMap.has(1) && diceMap.get(1)! < 3) sum += diceMap.get(1)! * 100;
  if (diceMap.has(5) && diceMap.get(5)! < 3) sum += diceMap.get(5)! * 50;

  return sum;
}

const dices = [
  [1, 2, 3],
  [3, 4, 1, 1, 5],
  [2, 3, 2, 3, 3, 2],
  [1, 1, 1, 1, 1, 5],
  [2, 3, 4, 3, 6, 6],
  [2, 2, 6, 6, 2, 2],
  [1, 3, 4, 3, 4, 1],
  [3, 3, 3, 3],
  [1, 2, 3, 4, 5],
];
for (const dice of dices) {
  console.log(dice);
  console.log(getScore(dice));
}
