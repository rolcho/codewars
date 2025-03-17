/**
 * Formats a list of names into a social media style "likes" message.
 * @param {string[]} a - An array of names of people who like something
 * @returns {string} A formatted string describing who likes something
 *
 * @example
 * // Returns "no one likes this"
 * likes([]);
 *
 * @example
 * // Returns "Peter likes this"
 * likes(["Peter"]);
 *
 * @example
 * // Returns "Peter and John like this"
 * likes(["Peter", "John"]);
 *
 * @example
 * // Returns "Peter, John and Mark like this"
 * likes(["Peter", "John", "Mark"]);
 *
 * @example
 * // Returns "Peter, John and 2 others like this"
 * likes(["Peter", "John", "Mark", "Max"]);
 */
export const likes = (a: string[]): string => {
  const [first, second, third] = a;
  const remaining = a.length - 2;

  if (a.length === 0) return "no one likes this";
  if (a.length === 1) return `${first} likes this`;
  if (a.length === 2) return `${first} and ${second} like this`;
  if (a.length === 3) return `${first}, ${second} and ${third} like this`;
  return `${first}, ${second} and ${remaining} others like this`;
};
