export function decoder(encoded: string, marker: string): string {
  const text = encoded.split("");
  const decoded: string[] = [];
  let reverseDirection = false;

  for (let i = 0; i < encoded.length; i++) {
    if (encoded[i] === marker) {
      reverseDirection ? text.pop() : text.shift();
      reverseDirection = !reverseDirection;
      continue;
    }
    reverseDirection
      ? decoded.push(text.pop() ?? "")
      : decoded.push(text.shift() ?? "");
  }
  return decoded.join("");
}
