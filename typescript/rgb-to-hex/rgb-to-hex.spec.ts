import { describe, it, expect } from '@jest/globals';
import { rgbToHex } from './rgb-to-hex.ts';

describe('convert rgb values to hex string', () => {
  it('should return FFFFFF from 255, 255, 255', () => {
    const [r, g, b] = [255, 255, 255];
    const hex = 'FFFFFF';

    const result = rgbToHex(r, g, b);

    expect(result).toBe(hex);
  });

  it('should nearest valid value and return FFFFFF from 255, 255, 300', () => {
    const [r, g, b] = [255, 255, 300];
    const hex = 'FFFFFF';

    const result = rgbToHex(r, g, b);

    expect(result).toBe(hex);
  });

  it('should return 000000 from 0, 0, 0', () => {
    const [r, g, b] = [0, 0, 0];
    const hex = '000000';

    const result = rgbToHex(r, g, b);

    expect(result).toBe(hex);
  });

  it('should return 9400D3 for 148, 0, 211', () => {
    const [r, g, b] = [148, 0, 211];
    const hex = '9400D3';

    const result = rgbToHex(r, g, b);

    expect(result).toBe(hex);
  });

  it('should handle nearest valid value and return 9400D3 for 148.2, -2, 210.8', () => {
    const [r, g, b] = [148.2, -2, 210.8];
    const hex = '9400D3';

    const result = rgbToHex(r, g, b);

    expect(result).toBe(hex);
  });
});
