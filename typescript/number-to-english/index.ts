export function numberToEnglish(x: number): string {
  const english: { [key: number]: string } = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  } as const;

  if (x < 0 || x > 99999 || x % 1 !== 0) return 'zero';

  const hundredToEnglish = (n: number): string => {
    const text: string[] = [];
    const hundreds = Math.floor(n / 100);
    if (hundreds) {
      text.push(`${english[hundreds]} hundred`);
    }

    const hundredDivisionRemainder = n % 100;
    if (hundredDivisionRemainder > 20) {
      const tens = Math.floor(hundredDivisionRemainder / 10);
      text.push(english[tens * 10]);
      const ones = hundredDivisionRemainder % 10;
      if (ones > 0) text.push(english[ones]);
    } else if ((hundreds && hundredDivisionRemainder) || !hundreds)
      text.push(english[hundredDivisionRemainder]);
    return text.join(' ');
  };

  const thousands = Math.floor(x / 1000);
  const thousandDivisionRemainder = x % 1000;

  if (thousands && !thousandDivisionRemainder)
    return `${hundredToEnglish(thousands)} thousand`;
  if (!thousands && thousandDivisionRemainder)
    return hundredToEnglish(thousandDivisionRemainder);
  return `${hundredToEnglish(thousands)} thousand ${hundredToEnglish(
    thousandDivisionRemainder,
  )}`;
}
