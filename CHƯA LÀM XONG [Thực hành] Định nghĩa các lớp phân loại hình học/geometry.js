"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    return Shape;
}());
exports.default = Shape;
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
        return 2 * this.radius * Math.PI;
    };
    return Circle;
}());
