export function alphabetPosition(text: string): string {
  const positions = new Array<number>();
  for (let i = 0; i < text.length; i++) {
    const charCode = text.toLowerCase().charCodeAt(i);
    if (charCode < 97 || charCode > 122) continue;
    positions.push(charCode - 96);
  }
  return positions.join(" ");
}
