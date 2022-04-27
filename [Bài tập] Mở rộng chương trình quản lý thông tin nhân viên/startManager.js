"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.addEmployee = exports.display = void 0;
var main_1 = require("./main");
function display(employee) {
    console.log(employee);
}
exports.display = display;
function addEmployee(employee) {
    main_1.employees.push(employee);
}
exports.addEmployee = addEmployee;
function deleteEmployee(employee) {
    main_1.employees.slice(employee);
}
exports.deleteEmployee = deleteEmployee;
// export function displayArray(employees){
//     console.log(employees);
// }
