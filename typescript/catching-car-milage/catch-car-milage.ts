const convertToArray = (n: number) =>
  n
    .toString()
    .split("")
    .map((d) => Number.parseInt(d));

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

console.log(isInteresting(98, []));
console.log(isInteresting(109, []));

// test(3, [1337, 256],     0);
// test(1336, [1337, 256],  1);
// test(1337, [1337, 256],  2);
// test(11208, [1337, 256], 0);
// test(11209, [1337, 256], 1);
// test(11211, [1337, 256], 2);
