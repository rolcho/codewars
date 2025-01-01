type Operand = "*" | "/" | "+" | "-";

type MathNode = {
  value: Operand | number | undefined;
  leftNode: MathNode | undefined;
  rightNode: MathNode | undefined;
};

const input = "2+3-4*5/6";

function parseTree(input: string): MathNode | undefined {
  if (input.length === 0) return undefined;
  const hasOperand =
    input.includes("*") ||
    input.includes("/") ||
    input.includes("+") ||
    input.includes("-");
  if (!isNaN(Number.parseInt(input)) && !hasOperand)
    return {
      value: Number.parseInt(input),
      leftNode: undefined,
      rightNode: undefined,
    };
  const firstPlus = input.indexOf("+");
  const firstMinus = input.indexOf("-");
  const firstMultiply = input.indexOf("*");
  const firstDivide = input.indexOf("/");
  const firstOperand = Math.min(
    firstPlus < 0 ? Infinity : firstPlus,
    firstMinus < 0 ? Infinity : firstMinus,
    firstMultiply < 0 ? Infinity : firstMultiply,
    firstDivide < 0 ? Infinity : firstDivide
  );
  const operand = input[firstOperand] as Operand;
  const leftString = input.slice(0, firstOperand);
  const rightString = input.slice(firstOperand + 1);
  return {
    value: operand,
    leftNode: parseTree(leftString),
    rightNode: parseTree(rightString),
  };
}

const tree = parseTree(input);
console.log({ tree });
