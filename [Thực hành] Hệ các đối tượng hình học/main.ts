import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
let rectangle =  new Rectangle(10,5,'blue',true)
let circle = new Circle(10,'red',true)
let shape= new Shape('red',true)
console.log(circle.toString());
console.log(rectangle.toString());
console.log(shape.toString());