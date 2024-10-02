export function ipsBetween2(start: string, end: string): number {
  const ipToNumber = (ip: string): number =>
    ip
      .split(".")
      .map(Number)
      .reduce((res, x, i) => res + x * 256 ** (3 - i), 0);
  return ipToNumber(end) - ipToNumber(start);
}

export function ipsBetween1(start: string, end: string): number {
  let result = 0;

  const firstAddr = start.split(".").map((n) => Number.parseInt(n));
  const endAddr = end.split(".").map((n) => Number.parseInt(n));

  if (firstAddr.length !== 4 || endAddr.length !== 4) {
    return -1;
  }

  for (let i = 0; i < 4; i++) {
    result += (endAddr[i] - firstAddr[i]) * Math.pow(256, 3 - i);
  }

  return result;
}
