// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array

const convertToArray = (n: number) => n.toString().split("").map((d) => parseInt(d));

export function isInteresting(n: number, awesomePhrases: number[]): number {
  const digits = convertToArray(n);
  return 0;
}

isInteresting(123, []);