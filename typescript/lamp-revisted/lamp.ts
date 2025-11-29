export class Lamp {
  on = false;
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  toggleSwitch(): void {
    this.on = !this.on;
  }

  state(): string {
    return `The lamp is ${this.on ? 'on' : 'off'}.`;
  }
}
