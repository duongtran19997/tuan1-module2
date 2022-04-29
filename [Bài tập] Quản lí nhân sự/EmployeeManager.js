"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.addEmployee = function (employee) {
        EmployeeManager.List.push(employee);
    };
    EmployeeManager.displayEmployeeList = function () {
        console.log(EmployeeManager.List);
    };
    EmployeeManager.deleteEmployee = function (employee) {
        EmployeeManager.List.splice(EmployeeManager.List.indexOf(employee));
    };
    EmployeeManager.fixEmployee = function (employee, _a) {
        var name = _a.name, address = _a.address, position = _a.position;
        //sự khác biệt của có ngoặc và không ngoặc trong tham số của method
        // destructuring
        employee.setName(name);
        employee.setAddress(address);
        // employee.setBirthday(birthday);
        employee.setPosition(position);
    };
    EmployeeManager.List = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
