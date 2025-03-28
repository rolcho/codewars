/**
 * Creates a formatted phone number string from an array of numbers.
 *
 * @param numbers - An array of 10 numbers representing the digits of a phone number
 * @returns A promise that resolves to a formatted phone number string in the format "(XXX) XXX-XXXX"
 * @throws Error if the input array doesn't contain exactly 10 digits
 * @throws Error if any element in the array is not a valid non-negative integer
 *
 * @example
 * // Returns "(123) 456-7890"
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 */
export function createPhoneNumber(numbers: number[]): string {
  if (numbers.length !== 10) throw new Error('Invalid number of digits');
  for (const num of numbers) {
    if (Number.isNaN(num) || Math.floor(num) !== num || num < 0)
      throw new Error('Invalid digit');
  }
  const areaCode = numbers.splice(0, 3).join('');
  const firstPart = numbers.splice(0, 3).join('');
  const secondPart = numbers.join('');
  const phoneNumber = `(${areaCode}) ${firstPart}-${secondPart}`;
  return phoneNumber;
}
