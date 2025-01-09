import { MORSE_CODE } from "./preloaded.ts";
export function decodeMorse(morseCode: string): string {
  const morseArr = morseCode.trim().split(" ");
  let str = "";
  for (let i = 0; i < morseArr.length; i++) {
    if (!morseArr[i] && !morseArr[i + 1]) str += " ";
    if (MORSE_CODE[morseArr[i]]) str += MORSE_CODE[morseArr[i]];
  }
  return str;
}
