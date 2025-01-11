//     testing("Are they here", "yes, they are here", "2:eeeee/2:yy/=:hh/=:rr");
type CharFrequency = Record<string, number>;
type MaxChars = [number, [string, number][]];
type MaxCharsArray = MaxChars[];
const getCharFrequency = (s: string): CharFrequency => {
  const charFrequency: CharFrequency = {};
  for (const c of s) {
    if (c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123)
      charFrequency[c] = (charFrequency[c] ?? 0) + 1;
  }
  return charFrequency;
};

const updateMaxCharArray = (
  maxChars: MaxCharsArray,
  count: number,
  char: string,
  index: number,
): MaxCharsArray => {
  const newMap = maxChars.map(([countIndex, charArray]): MaxChars => {
    if (countIndex === count)
      return [
        count,
        [...charArray, [char, index] as [string, number]].sort(
          ([charA], [charB]) => charA.localeCompare(charB),
        ),
      ];
    return [count, charArray];
  });
  return newMap;
};

const getMaxCharArray = (
  c1: CharFrequency,
  c2: CharFrequency,
): MaxCharsArray => {
  let maxChars: MaxCharsArray = [];
  for (const [char, count] of Object.entries(c1)) {
    if (c2[char] === undefined || count > c2[char]) {
      if (maxChars.some(([_, charIndex]) => charIndex[0] !== undefined))
        maxChars.push([count, []]);
      maxChars = updateMaxCharArray(maxChars, count, char, 1);
      if (c2[char] !== undefined) delete c2[char];
      continue;
    }
    if (c2[char] === c1[char]) {
      if (maxChars.some(([_, charIndex]) => charIndex[0] !== undefined))
        maxChars.push([count, []]);
      maxChars = updateMaxCharArray(maxChars, count, char, 0);
      delete c2[char];
    }
  }
  for (const [char, count] of Object.entries(c2)) {
    if (maxChars.some(([_, charIndex]) => charIndex[0] !== undefined))
      maxChars.push([count, []]);
    maxChars = updateMaxCharArray(maxChars, count, char, 2);
  }
  return maxChars;
};

export const mix = (s1: string, s2: string): string => {
  const s1Frequency = getCharFrequency(s1);
  const s2Frequency = getCharFrequency(s2);
  const maxChars = getMaxCharArray(s1Frequency, s2Frequency);
  console.log({ maxChars });
  return "";
};
