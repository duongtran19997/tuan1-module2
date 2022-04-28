"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
var Speed;
(function (Speed) {
    Speed[Speed["slow"] = 1] = "slow";
    Speed[Speed["medium"] = 2] = "medium";
    Speed[Speed["fast"] = 3] = "fast";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        this.speed = 1;
        this.on = false;
        this.radius = 5;
        this.color = 'blue';
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    Fan.prototype.getterSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getterOn = function () {
        return this.on;
    };
    Fan.prototype.getterRadius = function () {
        return this.radius;
    };
    Fan.prototype.getterColor = function () {
        return this.color;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.setOn = function (on) {
        this.on = on;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.toString = function () {
        var status = [];
        if (this.on === true) {
            status.push(this.radius, this.on, this.color, this.speed);
            console.log(status);
            console.log('fan is on');
        }
        else {
            this.speed = 0;
            status.push(this.radius, this.on, this.color, this.speed);
            console.log('fan is off');
            console.log(status);
        }
    };
    return Fan;
}());
exports.Fan = Fan;
