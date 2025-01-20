export function descendingOrder(n: number): number {
  const digits = n.toString().split("").map(Number);
  const result = Number.parseInt(
    digits
      .sort((a, b) => b - a)
      .map(String)
      .join("")
  );
  return result;
}
