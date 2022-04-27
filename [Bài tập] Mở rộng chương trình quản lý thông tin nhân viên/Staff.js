"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["others"] = 2] = "others";
})(gender || (gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, sex, birthday, email, phoneNumber) {
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
exports.Employee = Employee;
