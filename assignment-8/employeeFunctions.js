export function getEmployees(employees, salary) {
  return employees
    .filter(
      (employee) =>
        employee.name.toLowerCase().includes("am") && employee.salary > salary,
    )
    .map((employee) => ({
      ...employee,
      salary: (employee.salary / 100000).toFixed(1) + " Lac",
    }));
}
