/*
There is an array of strings. All strings contains similar letters except one. Try to find it!
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
It’s guaranteed that array contains more than 2 strings.
*/

export function findUniq(strings: string[]): string {
  type LetterCollection = {
    [letter: string]: boolean;
  };
  const collectLetters = (s: string): LetterCollection => {
    const collection: LetterCollection = {};
    for (let i = 0; i < s.length; i++) {
      const letter = s[i].toLowerCase();
      collection[letter] = true;
    }
    return collection;
  };

  function compareLetters(
    obj1: LetterCollection,
    obj2: LetterCollection,
  ): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }
  const compareWords = (a: string, b: string, c: string): string => {
    const wA = collectLetters(a);
    const wB = collectLetters(b);
    const wC = collectLetters(c);
    if (!compareLetters(wA, wB) && !compareLetters(wA, wC)) return a;
    if (!compareLetters(wB, wA) && !compareLetters(wB, wC)) return b;
    if (!compareLetters(wC, wA) && !compareLetters(wC, wB)) return c;
    return '';
  };

  for (let i = 2; i < strings.length; i++) {
    const sA = strings[i - 2];
    const sB = strings[i - 1];
    const sC = strings[i];
    const uniqString = compareWords(sA, sB, sC);
    if (uniqString !== '') return uniqString;
  }
  return '';
}
