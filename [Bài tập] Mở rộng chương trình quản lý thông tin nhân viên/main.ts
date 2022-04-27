export let employees:any[]=[];
import {Employee} from "./Staff";
let employee1= new Employee('Trung',0,new Date('27/07'),'trungdaukhac@pornhb.com',123456778)
let employee2= new Employee('Trau',1,new Date('7/07'),'trungdaukhac@pornhb.com',123456778)
let employee3= new Employee('Tro',2,new Date('3/07'),'trungdaukhac@pornhb.com',123456778)
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
import {addEmployee} from "./startManager";
import {deleteEmployee} from "./startManager";
import {display} from "./startManager";
import {displayArray} from "./startManager";
 addEmployee(employee1)
addEmployee(employee2)
addEmployee(employee3)
// console.log(employees);
// deleteEmployee(3);
// // display(employee3)
// displayArray(employees);
 employees.forEach(display)

