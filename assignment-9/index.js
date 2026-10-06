import { Employee } from "./employees.js";

let employee1 = new Employee(1, "Rahul", 35, 650000);
let employee2 = new Employee(2, "Priya", 52, 450000);
let employee3 = new Employee(3, "Amit", 28, 550000);
let employee4 = new Employee(4, "Neha", 45, 750000);

let employees = [
    employee1,
    employee2,
    employee3,
    employee4
];

let sortedByAge = Employee.sortEmployees(employees, "age");

console.log("Sorted by age:");
console.log(sortedByAge);

let sortedBySalary = Employee.sortEmployees(employees, "salary");

console.log("Sorted by salary:");
console.log(sortedBySalary);

let employeesBelow40 = Employee.filterByAge(employees, 40);

console.log("Employees below 40:");
console.log(employeesBelow40);