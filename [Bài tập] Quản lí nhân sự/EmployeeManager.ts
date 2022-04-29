import {Employee} from "./Employee";
export class EmployeeManager{
    static List = []
    constructor() {
    }
    static addEmployee(employee){
        EmployeeManager.List.push(employee);
    }
    static displayEmployeeList(){
        console.log(EmployeeManager.List);
    }
    static deleteEmployee(employee) {
        EmployeeManager.List.splice(EmployeeManager.List.indexOf(employee))
    }
    static fixEmployee(employee:Employee,{name,address,position}){
        //sự khác biệt của có ngoặc và không ngoặc trong tham số của method
        // destructuring
        employee.setName(name);
        employee.setAddress(address);
        // employee.setBirthday(birthday);
        employee.setPosition(position);
    }
}