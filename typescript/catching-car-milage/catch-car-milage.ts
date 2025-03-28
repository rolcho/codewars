/**
 * Converts a number to an array of its digits.
 * @param {number} n - The number to convert
 * @returns {number[]} An array of digits
 */
const convertToArray = (n: number): number[] =>
  n
    .toString()
    .split('')
    .map((d) => Number.parseInt(d));

/**
 * Checks if a number follows any of the interesting number rules.
 * Rules include: followed by zeros, same digits, incrementing digits,
 * decrementing digits, or palindrome.
 * @param {number[]} nums - Array of digits to check
 * @returns {boolean} True if the number follows any of the rules
 */
const rules = (nums: number[]): boolean => {
  if (nums.length < 3) return false;
  let isFollowedByZeros = true;
  let isSameDigits = true;
  let isIncrementDigits = true;
  let isDecrementDigits = true;
  let isPalindrome = true;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      isFollowedByZeros = nums[i] === 0 && isFollowedByZeros;
      isSameDigits = nums[i] === nums[i - 1] && isSameDigits;
      isDecrementDigits = nums[i] === nums[i - 1] - 1 && isDecrementDigits;
      isIncrementDigits =
        nums[i] === (nums[i - 1] + 1) % 10 && isIncrementDigits;
    }
    isPalindrome = nums[i] === nums[nums.length - i - 1] && isPalindrome;
  }

  return (
    isFollowedByZeros ||
    isSameDigits ||
    isIncrementDigits ||
    isDecrementDigits ||
    isPalindrome
  );
};

/**
 * Determines how interesting a number is based on defined rules and custom phrases.
 * Returns:
 * - 2: If the number is interesting
 * - 1: If the number will become interesting in the next 2 miles
 * - 0: If the number is not interesting
 *
 * @param {number} n - The number to check
 * @param {number[]} awesomePhrases - Array of custom interesting numbers
 * @returns {number} The interestingness score (0, 1, or 2)
 */
export function isInteresting(n: number, awesomePhrases: number[]): number {
  if (awesomePhrases.includes(n)) return 2;
  if (awesomePhrases.includes(n + 1) || awesomePhrases.includes(n + 2))
    return 1;

  const digits = convertToArray(n);
  const digitsMinusOne = convertToArray(n + 1);
  const digitsMinusTwo = convertToArray(n + 2);
  if (rules(digits)) return 2;
  if (rules(digitsMinusOne) || rules(digitsMinusTwo)) return 1;

  return 0;
}
