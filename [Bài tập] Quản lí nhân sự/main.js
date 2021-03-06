"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
// let employeeList = new EmployeeManager()
var employee1 = new Employee_1.Employee('Ronaldo', new Date(1985, 2, 5), 'Portugal', 'striker');
var employee2 = new Employee_1.Employee('Ronaldinho Gáucho', new Date(1980, 3, 21), 'Brazil', 'midfielder');
var employee3 = new Employee_1.Employee('Ronaldo de Lima', new Date(1978, 3, 8), 'Brazil', 'striker');
EmployeeManager_1.EmployeeManager.addEmployee(employee1);
EmployeeManager_1.EmployeeManager.addEmployee(employee2);
EmployeeManager_1.EmployeeManager.addEmployee(employee3);
EmployeeManager_1.EmployeeManager.displayEmployeeList();
// EmployeeManager.deleteEmployee(employee1);
EmployeeManager_1.EmployeeManager.fixEmployee(employee1, { name: 'Messi', address: 'Argentina', position: 'Director' });
// EmployeeManager.displayEmployeeList()
