export const towerBuilder = (nFloors: number): string[] => {
  const pyramid = new Array<string>(nFloors);
  console.log(pyramid);
  for (let i = 0; i < nFloors; i++) {
    pyramid[i] = "*"
      .repeat(i * 2 + 1)
      .padStart(nFloors + i, " ")
      .padEnd(nFloors * 2 - 1, " ");
  }
  return pyramid;
};

console.log(towerBuilder(5));
/*
 *
 ***
 *****
 */
