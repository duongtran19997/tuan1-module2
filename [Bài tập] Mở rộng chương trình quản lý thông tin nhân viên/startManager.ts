import {employees} from "./main";
import {Employee} from "./Staff";

export function display(employee:Employee){
    console.log(employee);
}
export function addEmployee(employee:Employee){
    employees.push(employee)
}
export function deleteEmployee(employee:number){
    employees.slice(employee)
}
// export function displayArray(employees){
//     console.log(employees);
// }
