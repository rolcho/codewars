import { MORSE_CODE } from './preloaded.ts';
const getFrequency = (rawBits: string): number => {
  while (rawBits.length > 0 && rawBits[0] === '0')
    rawBits = rawBits.substring(1);
  while (rawBits.length > 0 && rawBits[rawBits.length - 1] === '0')
    rawBits = rawBits.substring(0, rawBits.length - 1);
  if (rawBits.length === 0) return 0;
  const hasZeros = rawBits.includes('0');
  if (!hasZeros) {
    console.log({ rawBits });
    return rawBits.length;
  }
  const max: Record<string, number> = {
    '0': 0,
    '1': 0,
  };
  const current: Record<string, number> = {
    '0': 0,
    '1': 0,
  };
  for (let i = 0; i < rawBits.length; i++) {
    current[rawBits[i]]++;
    if (rawBits[i] === rawBits[i - 1]) {
      continue;
    }
    if (rawBits[i] === '0' && current['1'] > max['1']) max['1'] = current['1'];
    if (rawBits[i] === '1' && current['0'] > max['0']) max['0'] = current['0'];
    current['0'] = 0;
    current['1'] = 0;
    current[rawBits[i]] = 1;
  }
  if (max['0'] === 3 && max['1'] === 3) return 3;
  if (max['0'] % 3 === 0 && max['1'] % 3 === 0)
    return Math.min(max['0'] / 3, max['1'] / 3);
  if (max['0'] % 3 === 0) max['0'] /= 3;
  if (max['1'] % 3 === 0) max['1'] /= 3;

  const frequency = Math.min(max['0'], max['1']);
  return frequency;
};

const getBitStream = (rawBits: string, iterator: number): string => {
  let bitStream = '';
  for (let i = 0; i < rawBits.length; i += iterator) {
    bitStream += rawBits[i];
  }
  return bitStream;
};

const replaceBitsWithMorse = (bits: string) => {
  return bits
    .replaceAll('111', '-')
    .replaceAll('1', '.')
    .replaceAll('000', ' ')
    .replaceAll('0', '');
};

const getMorseCodes = (bitStream: string): string => {
  let morseCodes = '';
  let frame = '';
  for (let i = 0; i < bitStream.length; i++) {
    const endsWithSpace = (s: string): boolean => {
      return s.length >= 3 && s.slice(-3) === '000';
    };

    if (!endsWithSpace(frame)) {
      frame += bitStream[i];
      continue;
    }

    morseCodes += replaceBitsWithMorse(frame);
    frame = bitStream[i];
  }
  morseCodes += replaceBitsWithMorse(frame);
  return morseCodes.trim();
};

export const decodeBits = (bits: string) => {
  const freqency = getFrequency(bits);
  const bitStream = getBitStream(bits, freqency);
  const morseCodes = getMorseCodes(bitStream);
  console.log({ bits, freqency, bitStream, morseCodes });
  return morseCodes;
};

export const decodeMorse = (morseCode: string) => {
  const words = morseCode.split('  ');
  const wordArray = new Array<string>(words.length);
  for (let i = 0; i < words.length; i++) {
    const letters = words[i].split(' ');
    const letterArray = new Array<string>(letters.length);
    for (let j = 0; j < letters.length; j++) {
      letterArray[j] = MORSE_CODE[letters[j]] ?? '';
    }
    wordArray[i] = letterArray.join('');
  }
  return wordArray.join(' ');
};

const bits1 =
  '111111000000111111000000111111000000111111000000000000000000111111000000000000000000111111111111111111000000111111000000111111111111111111000000111111111111111111000000000000000000000000000000000000000000111111000000111111111111111111000000111111111111111111000000111111111111111111000000000000000000111111000000111111000000111111111111111111000000000000000000111111111111111111000000111111000000111111000000000000000000111111';

const bits2 = '111000111';
const bits3 = '111000000000111';
const bits4 = '01110';

const readableText1 = decodeMorse(decodeBits(bits1));
const readableText2 = decodeMorse(decodeBits(bits2));
const readableText3 = decodeMorse(decodeBits(bits3));
const readableText4 = decodeMorse(decodeBits(bits4));
console.log({ readableText1 });
console.log({ readableText2 });
console.log({ readableText3 });
console.log({ readableText4 });
