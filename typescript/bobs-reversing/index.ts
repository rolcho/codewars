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
