type Operand = "*" | "/" | "+" | "-";

type MathNode = {
  value: Operand | number;
  leftNode?: MathNode;
  rightNode?: MathNode;
};

const input = "2+3-1-4";

function parseTree(input: string, prevNode?: MathNode): MathNode | undefined {
  if (input.length === 0) return undefined;
  const hasOperand =
    input.includes("*") ||
    input.includes("/") ||
    input.includes("+") ||
    input.includes("-");
  if (!isNaN(Number.parseFloat(input)) && !hasOperand)
    return {
      value: Number.parseFloat(input),
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
  const leftNode = prevNode ?? { value: Number(leftString) };
  const rightNode = parseTree(rightString, prevNode);
  const newNode: MathNode = {
    value: operand,
    leftNode,
    rightNode,
  };
  return newNode;
}

function calculate(startNode: MathNode | undefined): number {
  if (startNode === undefined) return 0;
  switch (startNode.value) {
    case "+":
      const resultAdd =
        calculate(startNode.leftNode) + calculate(startNode.rightNode);
      return resultAdd;
    case "-":
      const resultMinus =
        calculate(startNode.leftNode) - calculate(startNode.rightNode);
      return resultMinus;
    case "*":
      const resultMultiply =
        calculate(startNode.leftNode) * calculate(startNode.rightNode);
      return resultMultiply;
    case "/":
      const divisor = calculate(startNode.rightNode);
      if (divisor === 0) throw new Error("Division by zero");
      const resultDivision = calculate(startNode.leftNode) / divisor;
      return resultDivision;
    default:
      return startNode.value ?? 0;
  }
}

const root = parseTree(input);

const value = calculate(root);
console.log(value);
