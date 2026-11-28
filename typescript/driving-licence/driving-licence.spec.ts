import { describe, it, assert } from 'vitest';
import { driver } from './driving-licence';

describe('Driving licence', () => {
  it('Should pass sample tests', () => {
    let data = ['John', 'James', 'Smith', '01-Jan-2000', 'M'];
    assert.equal(
      driver(data),
      'SMITH001010JJ9AA',
      "Should return 'SMITH001010JJ9AA'",
    );

    data = ['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'];
    assert.equal(
      driver(data),
      'GIBBS862131J99AA',
      "Should return 'GIBBS862131J99AA'",
    );

    data = ['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'];
    assert.equal(
      driver(data),
      'LEE99809021AR9AA',
      "Should return 'LEE99809021AR9AA'",
    );
  });
});
