/**
 * Decodes a string that has been encoded by splitting it into segments using a marker.
 * Segments at even indices are kept as is, while segments at odd indices are reversed.
 * The decoded string is the concatenation of the even segments followed by the reversed odd segments.
 *
 * @param {string} encoded - The encoded string.
 * @param {string} marker - The marker used to split the encoded string.
 * @returns {string} The decoded string.
 */
export function decoder(encoded: string, marker: string): string {
  const text = encoded.split(marker);
  const forwarded: string[] = [];
  const reversed: string[] = [];

  for (let i = 0; i < text.length; i++) {
    i % 2
      ? reversed.unshift(text[i].split("").reverse().join(""))
      : forwarded.push(text[i]);
  }
  return [...forwarded, ...reversed].join("");
}
