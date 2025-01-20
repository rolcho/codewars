export function scramble(str1: string, str2: string): boolean {
  const letters: Record<string, number> = {};

  for (const letter of str1) {
    letters[letter] = (letters[letter] ?? 0) + 1;
  }

  for (const letter of str2) {
    if (!letters[letter]) return false;
    letters[letter]--;
  }

  return true;
}
