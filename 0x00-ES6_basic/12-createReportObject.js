export default function createReportObject(employeesList) {
  const ReportObject = {
    allEmployees: employeesList,

    getNumberOfDepartments(employeesList) {
      let length = 0;
      for (let index in employeesList) length++;
      return length;
    }
  }

  return ReportObject;
}

