import { getEmployees, sortEmployeesByName , sortEmployeesBysalary} from "./employees.js";

getEmployees()
    .then((employees) => {
        console.log("employees recieved");
        console.log(employees);

        return sortEmployeesByName(employees);
    })

    .then((sortedEmployees) => {
        console.log("Sorted Employees");
        console.log(sortedEmployees);

        return sortEmployeesBysalary(sortedEmployees);
    })

    .then((sortedEmployeesSalary) => {
        console.log("sorted employees by salary");
        console.log(sortedEmployeesSalary);
    })

    .catch((error) => {
        console.log("error : " ,error);
    });