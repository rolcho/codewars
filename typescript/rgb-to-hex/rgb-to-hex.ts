/**
 * Converts RGB color values to hexadecimal color code.
 *
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} Hexadecimal color code (e.g., "FF00AA")
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const numToHex = (n: number) => {
    const x = Math.round(n);
    if (x < 0) return '00';
    if (x < 16) return `0${x.toString(16).toUpperCase()}`;
    if (x > 255) return 'FF';
    return x.toString(16).toUpperCase();
  };
  return [r, g, b].map(numToHex).join('');
}
