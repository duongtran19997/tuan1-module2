"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employees = void 0;
exports.employees = [];
var Staff_1 = require("./Staff");
var employee1 = new Staff_1.Employee('Trung', 0, new Date('27/07'), 'trungdaukhac@pornhb.com', 123456778);
var employee2 = new Staff_1.Employee('Trau', 1, new Date('7/07'), 'trungdaukhac@pornhb.com', 123456778);
var employee3 = new Staff_1.Employee('Tro', 2, new Date('3/07'), 'trungdaukhac@pornhb.com', 123456778);
// function display(employee:Employee){
//     console.log(employee);
// }
// function addEmployee(employee:Employee){
//     employees.push(employee)
// }
// function deleteEmployee(employee:number){
//    employees.slice(employee)
// }
// function displayarray(employes:[]){
//     console.log(employes);
// }
var startManager_1 = require("./startManager");
var startManager_2 = require("./startManager");
(0, startManager_1.addEmployee)(employee1);
(0, startManager_1.addEmployee)(employee2);
(0, startManager_1.addEmployee)(employee3);
// console.log(employees);
// deleteEmployee(3);
// // display(employee3)
// displayArray(employees);
exports.employees.forEach(startManager_2.display);
