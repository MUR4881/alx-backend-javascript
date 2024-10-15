export default function createIteratorObject(report) {
  let employeesList = []
  for (let dept in report.allEmployees) {
    employeesList.push(...(report.allEmployees[dept]));
  }

  return employeesList;
}
