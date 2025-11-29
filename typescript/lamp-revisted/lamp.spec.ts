import { describe, expect, it } from '@jest/globals';
import { Lamp } from './lamp';

describe('Test lamp class', () => {
  it('should be off and be the init color', () => {
    const blueLamp = new Lamp('Blue');
    expect(blueLamp.color).toBe('Blue');
    expect(blueLamp.on).toBe(false);
    expect(blueLamp.state()).toBe('The lamp is off.');
  });

  it('should be on after toggle switch', () => {
    const redLamp = new Lamp('Red');
    redLamp.toggleSwitch();

    expect(redLamp.color).toBe('Red');
    expect(redLamp.on).toBe(true);

    expect(redLamp.state()).toBe('The lamp is on.');
  });

  it('should be off after two toggle switch', () => {
    const greenLamp = new Lamp('Green');

    greenLamp.toggleSwitch();
    greenLamp.toggleSwitch();

    expect(greenLamp.color).toBe('Green');
    expect(greenLamp.on).toBe(false);
    expect(greenLamp.state()).toBe('The lamp is off.');
  });

  it('should not change color', () => {
    const yellowLamp = new Lamp('Yellow');
    const changeToRed = (lamp: { color: string }) => {
      lamp.color = 'Red';
    };
    expect(() => changeToRed(yellowLamp)).toThrow();
    expect(yellowLamp.color).toBe('Yellow');
    expect(yellowLamp.on).toBe(false);
  });
});
