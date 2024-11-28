// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array

const convertToArray = (n: number) =>
  n
    .toString()
    .split("")
    .map((d) => Number.parseInt(d));

const rules = (nums: number[]): boolean => {
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
      isIncrementDigits = nums[i] === nums[i - 1] + 1 && isIncrementDigits;
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
export function isInteresting(n: number, awesomePhrases: number[]): number {
  const digits = convertToArray(n);
  const result = rules(digits);
  return 0;
}

isInteresting(100, []);
isInteresting(90000, []);
isInteresting(1111, []);
isInteresting(1234, []);
isInteresting(4321, []);
isInteresting(1221, []);
isInteresting(73837, []);
