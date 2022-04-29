"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, birthday, address, position) {
        this.name = name;
        this.birthDay = birthday;
        this.address = address;
        this.position = position;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getBirthday = function () {
        return this.birthDay;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.getPosition = function () {
        return this.position;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.setBirthday = function (birthday) {
        this.birthDay = birthday;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setPosition = function (position) {
        this.position = position;
    };
    return Employee;
}());
exports.Employee = Employee;
