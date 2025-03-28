type Operand = '*' | '/' | '+' | '-';

type MathNode = {
  value: Operand | number | undefined;
  leftNode?: MathNode;
  rightNode?: MathNode;
};

const input = '2+3-4-1';
const operands = '+-*/';
const isOperand = (s: string) => operands.includes(s);

function parseExpressions(input: string): string[] {
  const expressions: string[] = [];
  let current = '';
  for (const char of input) {
    if (isOperand(char)) {
      expressions.push(current);
      expressions.push(char);
      current = '';
      continue;
    }
    current += char;
  }
  expressions.push(current);
  return expressions;
}

function parseTree(input: string[]): MathNode | undefined {
  if (input.length === 0) return undefined;
  const root: MathNode = { value: undefined };
  for (const str of input) {
    if (root.value === undefined) root.value = Number.parseFloat(str);
  }
  return undefined;
}

const parsedInput = parseExpressions(input);
const tree = parseTree(parsedInput);
console.log({ tree });
