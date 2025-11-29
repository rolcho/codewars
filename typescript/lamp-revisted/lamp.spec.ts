import { describe, expect, it } from '@jest/globals';
import { Lamp } from './lamp';

describe('Test lamp class', () => {
  const blueLamp = new Lamp('Blue');
  it('should be off and be the init color', () => {
    expect(blueLamp.color).toBe('Blue');
    expect(blueLamp.on).toBeFalsy();
    expect(blueLamp.state()).toBe('The lamp is off.');
  });

  it('should be on after toggle switch', () => {
    blueLamp.toggleSwitch();
    expect(blueLamp.on).toBeTruthy();
    expect(blueLamp.state()).toBe('The lamp is on.');
  });
});
