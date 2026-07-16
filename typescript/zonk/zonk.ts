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

function isStraight(dice: number[]): boolean {
  return new Set(dice).size === 6;
}

function isThreePairs(dice: Collection): boolean {
  return (
    dice.size === 3 && Array.from(dice.values()).every((value) => value === 2)
  );
}

function scoreOfAKind(dice: Collection, amount: number): number {
  let score = 0;
  const multiplier = amount - 2;

  for (const [value, count] of dice) {
    if (count === amount) {
      const baseScore = value === 1 ? 1000 : 100;
      score += value * baseScore * multiplier;
    }
  }

  return score;
}

function scoreLooseDice(
  dice: Collection,
  value: number,
  points: number,
): number {
  const count = dice.get(value);
  return count !== undefined && count < 3 ? count * points : 0;
}

export function getScore(dice: number[]): number {
  if (isStraight(dice)) return 1000;

  const diceMap = preProcess(dice);

  if (isThreePairs(diceMap)) return 750;

  let sum = 0;

  sum += scoreOfAKind(diceMap, 6);
  sum += scoreOfAKind(diceMap, 5);
  sum += scoreOfAKind(diceMap, 4);
  sum += scoreOfAKind(diceMap, 3);

  sum += scoreLooseDice(diceMap, 1, 100);
  sum += scoreLooseDice(diceMap, 5, 50);

  return sum;
}
