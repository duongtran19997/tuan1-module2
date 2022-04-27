class Shape {
    color: string
    filled: boolean

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}
let shape = new Shape("red", false);

console.log(shape);
class Circle {
    color: string
    filled: boolean
    radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        this.color = color
        this.filled = filled
        this.radius = radius
    }

    getArea() {
        return this.radius * this.radius * Math.PI
    }

    getPerimeter() {
        return this.radius * 2 * Math.PI
    }
}
let circle = new Circle( "red", true,4.5);

console.log(circle);
class Rectangle {
    color: string
    filled: boolean
    width: number
    length: number

    constructor(color: string, filled: boolean, width: number, length: number) {
        this.color = color
        this.filled = filled
        this.width = width
        this.length = length
    }
    getArea(){
        return this.width*this.length
    }
    getPerimeter(){
        return (this.width+this.length)*2
    }
}
let rectangle = new Rectangle('red', true, 2, 4);

console.log(rectangle);

class Square {
    color: string;
    filled: boolean
    side: number
    constructor(color: string,
                filled: boolean,
                side:number) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}
let square = new Square("yellow", true, 5);

console.log(square);