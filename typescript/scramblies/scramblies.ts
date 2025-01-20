export function scramble(str1: string, str2: string): boolean {
  const letters: Record<string, number> = {};
  const wordLetters: Record<string, number> = {};

  for (const letter of str1) {
    letters[letter] = (letters[letter] ?? 0) + 1;
  }

  for (const letter of str2) {
    wordLetters[letter] = (wordLetters[letter] ?? 0) + 1;
  }

  for (const [letter, count] of Object.entries(wordLetters)) {
    if (letters[letter] === undefined || letters[letter] < count) return false;
  }

  return true;
}
