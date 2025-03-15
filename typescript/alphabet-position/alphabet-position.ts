/**
 * Converts a string to a sequence of positions in the alphabet.
 *
 * @param text - The input string to convert
 * @returns A string containing the position of each letter in the alphabet (1-26),
 *          separated by spaces. Non-alphabetic characters are ignored.
 *
 * @example
 * // returns "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 * alphabetPosition("The sunset sets at twelve o'clock.");
 */
export function alphabetPosition(text: string): string {
  const positions = new Array<number>();
  for (let i = 0; i < text.length; i++) {
    const charCode = text.toLowerCase().charCodeAt(i);
    if (charCode < 97 || charCode > 122) continue;
    positions.push(charCode - 96);
  }
  return positions.join(" ");
}
