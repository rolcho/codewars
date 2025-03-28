/**
 * Checks if in the given string are braces are valid in open-close pairs
 *
 * @param braces - String of braces
 * @returns True if brace pairs are valid false if it isn't
 */
export function validBraces(braces: string): boolean {
  const bracePairs: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  } as const;

  const braceStack: string[] = [];

  for (const brace of braces) {
    if (
      braceStack.length > 0 &&
      braceStack[braceStack.length - 1] === bracePairs[brace]
    ) {
      braceStack.pop();
      continue;
    }
    braceStack.push(brace);
  }

  return braceStack.length === 0;
}
