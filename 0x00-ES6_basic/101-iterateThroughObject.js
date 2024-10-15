export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (let index in reportWithIterator) {
    if (index != 0) employees += " | ";
    employees += reportWithIterator[index];
  }

  return employees;
}
