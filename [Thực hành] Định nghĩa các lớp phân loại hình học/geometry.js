var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    return Shape;
}());
var shape = new Shape("red", false);
console.log(shape);
var Circle = /** @class */ (function () {
    function Circle(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return this.radius * 2 * Math.PI;
    };
    return Circle;
}());
var circle = new Circle("red", true, 4.5);
console.log(circle);
var Rectangle = /** @class */ (function () {
    function Rectangle(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.width + this.length) * 2;
    };
    return Rectangle;
}());
var rectangle = new Rectangle('red', true, 2, 4);
console.log(rectangle);
var Square = /** @class */ (function () {
    function Square(color, filled, side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    return Square;
}());
var square = new Square("yellow", true, 5);
console.log(square);
