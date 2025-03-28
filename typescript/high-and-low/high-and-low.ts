export class Kata {
  static highAndLow(numbers: string): string {
    const nums = numbers.split(' ').map(Number);
    const high = Math.max(...nums);
    const low = Math.min(...nums);
    return `${high} ${low}`;
  }
}
