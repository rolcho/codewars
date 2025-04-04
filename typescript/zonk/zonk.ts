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
        const base = k === 1 ? 1000 : 100;
        subSum += k * base * multiply;
      }
    }
    return subSum;
  };

  let sum = 0;

  sum += numberOfSame(diceMap, 6);
  sum += numberOfSame(diceMap, 5);
  sum += numberOfSame(diceMap, 4);
  sum += numberOfSame(diceMap, 3);

  const diceOnes = diceMap.get(1);
  const diceFives = diceMap.get(5);
  if (diceOnes !== undefined) if (diceOnes < 3) sum += diceOnes * 100;
  if (diceFives !== undefined) if (diceFives < 3) sum += diceFives * 50;

  return sum;
}
