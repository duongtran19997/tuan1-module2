import {Shape} from "./Shape";
export class Circle extends Shape {
    private _radius: number;
    constructor(radius:number,color:string,filled:boolean) {
        super(color,filled);
        this._radius=radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }
    toString(): string {
        return `A Circle with radius=${this.radius}, which is a subclass of ${super.toString()}`;
    }
}
