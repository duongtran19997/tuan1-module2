export class Shape {
    private _color: string
    private _filled: boolean

    constructor(color: string, filled: boolean) {
        this._color = color
        this._filled = filled
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get filled(): boolean {
        return this._filled;
    }

    set filled(value: boolean) {
        this._filled = value;
    }
     toString():string{
        return `A Shape with color of ${this.color} and ${this.filled ? " filled" : "not filled"}`;
    }
}