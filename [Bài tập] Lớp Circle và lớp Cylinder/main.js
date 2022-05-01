"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Cylinder_1 = require("./Cylinder");
var circle = new Circle_1.Circle(10, 'blue');
var cylinder = new Cylinder_1.Cylinder(10, 2, 'red');
console.log(cylinder.getVolume());
