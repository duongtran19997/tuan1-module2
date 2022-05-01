import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";
// let employeeList = new EmployeeManager()
let employee1 = new Employee('Ronaldo',new Date(1985,2,5),'Portugal','striker')
let employee2 = new Employee('Ronaldinho Gáucho',new Date(1980,3,21),'Brazil','midfielder')
let employee3 = new Employee('Ronaldo de Lima',new Date(1978,3,8),'Brazil','striker')
EmployeeManager.addEmployee(employee1)
EmployeeManager.addEmployee(employee2)
EmployeeManager.addEmployee(employee3)
EmployeeManager.displayEmployeeList()
// EmployeeManager.deleteEmployee(employee1);

EmployeeManager.fixEmployee(employee1,{name:'Messi',address:'Argentina',position:'Director'})
// EmployeeManager.displayEmployeeList()