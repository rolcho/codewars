export function calc(expr: string): number {
  if (expr.length === 0) return 0;
  const operandus = (a: number, b: number, o: string): number | undefined => {
    if (o === '+') return (a + b) as number;
    if (o === '-') return (a - b) as number;
    if (o === '*') return (a * b) as number;
    if (o === '/') return (a / b) as number;
  };

  const tokens = expr.split(' ');
  const stack: number[] = [];

  for (const token of tokens) {
    if (!Number.isNaN(Number(token))) {
      stack.push(Number(token));
      continue;
    }
    const b = stack.pop() as number;
    const a = stack.pop() as number;
    stack.push(operandus(a, b, token) as number);
  }

  return stack.pop() as number;
}
