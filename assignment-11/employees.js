let employees = [
    { id: 1, name: "Rahul", age: 35, salary: 650000 },
    { id: 2, name: "Amit", age: 28, salary: 550000 },
    { id: 3, name: "Priya", age: 42, salary: 750000 },
    { id: 4, name: "Neha", age: 31, salary: 450000 }
];

export async function getEmployees() {

    let delay = Math.floor(Math.random * 1000) + 1000;

    await new Promise((resolve) => {
        setTimeout(resolve, delay);
    })

    return employees;
}

