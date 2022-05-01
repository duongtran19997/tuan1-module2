export class Point2D{
    private _x:number
    private _y:number
    constructor(x:number,y:number) {
        this._x=x
        this._y=y
    }

    get x() {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(){
        return this._y;
    }

    set y(value: number)  {
        this._y = value;
    }
    getXY(){
        return `x la ${this.x},y la ${this.y}`
    }
    setXY(x:number,y:number){
        this.x=x
        this.y=y
    }
}