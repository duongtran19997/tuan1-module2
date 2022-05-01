import {Circle} from "./Circle";
export class Cylinder extends Circle{
    private _height:number
    constructor(height:number,radius:number,color:string) {
        super(radius,color);
        this._height=height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getVolume(){
        return `thể tích bằng ${super.getArea()*this.height}`
    }
}