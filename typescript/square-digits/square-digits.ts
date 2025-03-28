export class Kata {
  static squareDigits(num: number): number {
    return Number.parseInt(
      String(num)
        .split('')
        .map((s: string) => String(Math.pow(Number.parseInt(s), 2)))
        .join(''),
    );
  }
}
