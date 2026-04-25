/**
 * Buddy pairs

You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself. In the following description, divisors will mean proper divisors. For example for  100 they are 1, 2, 4, 5, 10, 20, 25, and 50.

Let s(n) be the sum of these proper divisors of n. Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:

(n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1

For example 48 & 75 is such a pair:

Divisors of 48 are: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
Divisors of 75 are: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1
Task

Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs such that n (positive integer) is between start (inclusive) and limit (inclusive);  m can be greater than limit and has to be greater than n

If there is no buddy pair satisfying the conditions, then return "Nothing" or (for Go lang) nil or (for Dart) null; (for Lua, Pascal, Perl, D) [-1, -1]; (for Erlang {-1, -1}).

Examples

(depending on the languages)

buddy(10, 50) returns [48, 75]
buddy(48, 50) returns [48, 75]
or
buddy(10, 50) returns "(48 75)"
buddy(48, 50) returns "(48 75)"
 */

function sumDivisors(num: number): number {
  if (num <= 1) return 0;
  let sum = 1;
  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i;
      const counterpart = num / i;
      if (counterpart !== i) {
        sum += counterpart;
      }
    }
  }
  return sum;
}

function buddyPairs(start: number, limit: number): number[] {
  for (let n = start; n <= limit; n++) {
    const sumN = sumDivisors(n);
    const sumM = sumDivisors(sumN - 1);
    if (sumM === n + 1 && sumN - 1 > n) {
      return [n, sumN - 1];
    }
  }
  return [];
}

console.log(buddyPairs(2382, 3679));
console.log(buddyPairs(2382, 3679));
