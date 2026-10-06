import employees from "./employees.json" with { type: "json" };

import { getEmployees } from "./employeeFunctions.js";

let result = getEmployees(employees, 500000);

console.log(result);