"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point2D_1 = require("./Point2D");
var Point3D_1 = require("./Point3D");
var point2d = new Point2D_1.Point2D(2, 3);
var point3d = new Point3D_1.Point3D(3, 4, 5);
console.log(point2d.x);
console.log(point3d.x);
console.log(point3d.getXYZ());
