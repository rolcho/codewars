export class Kata {
  static highAndLow(numbers: string): string {
    const nums = numbers.split(" ").map(Number);
    const high = Math.max(...nums);
    const low = Math.min(...nums);
    return `${high} ${low}`;
  }
}

console.log(Kata.highAndLow("1 2 3 4 5"));
