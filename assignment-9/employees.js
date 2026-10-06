export class Employee {
    constructor(id, name, age, salary){
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    static sortEmployees(employees, parameter){
        return employees.sort((a, b) => {
            return a[parameter] - b[parameter];
        });
    }

    static filterByAge(employees, age){
        return employees.filter(employee => employee.age < age);
    }
}