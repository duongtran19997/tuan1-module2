import {Shape} from "./Shape";
export class Rectangle extends Shape{
    private _width:number
    private _length:number
    constructor(width:number,length:number,color:string,filled:boolean) {
        super(color,filled);
        this._width=width
        this._length=length
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
    getArea(width,length){
        return this.width*this.length
    }
    getPerimeter(width,length){
        return (this.width+this.length)*2
    }
    toString(): string {
        return `A Rectangle with ${this.width} and ${this.length}, which is a subclass of ${super.toString()}`;
    }
}