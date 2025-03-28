import { expect, it } from '@jest/globals';
import { fibonacciSequence } from './fibonacci';

it('should generate the correct sequence', () => {
  const fibSeq = fibonacciSequence();
  const expectedSequence = [1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n];

  for (let i = 0; i < 10; i++) {
    expect(fibSeq.next().value).toEqual(expectedSequence[i]);
  }
});
