import { getEmployees } from "./employees.js";

async function main() {
    try {
        console.log("Getting Employees...");

        let employees = await getEmployees();

        console.log("Employees Received ");
        console.log(employees);
    } catch (error) {
        console.log(error);
    }
}

main();