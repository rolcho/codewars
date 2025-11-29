export class Lamp {
  private _on = false;
  private readonly _color: string;

  constructor(color: string) {
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  get on(): boolean {
    return this._on;
  }

  toggleSwitch(): void {
    this._on = !this._on;
  }

  state(): string {
    return `The lamp is ${this._on ? 'on' : 'off'}.`;
  }
}
