let employees = [
    {
        id: 1,
        name: "Rahul",
        age: 35,
        salary: 650000
    },
    {
        id: 2,
        name: "Amit",
        age: 28,
        salary: 550000
    },
    {
        id: 3,
        name: "Priya",
        age: 42,
        salary: 750000
    },
    {
        id: 4,
        name: "Neha",
        age: 31,
        salary: 450000
    }
];

export function getEmployees() {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            resolve(employees);
        }, delay);
    })
};

export function sortEmployeesByName() {
    return new Promise((resolve, reject) => {
        let sortedEmployees = employees.sort((a,b) => {
            return a.name.localeCompare(b.name);
        })

        resolve(sortedEmployees);
    })
};

export function sortEmployeesBysalary() {
    return new Promise((resolve, reject) => {
        let sortedEmployeesSalary = employees.sort((a,b) => {
            return a.salary - b.salary;
        })

        resolve(sortedEmployeesSalary);
    })
}