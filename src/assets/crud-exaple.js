const fs = require('fs');
const data = require('./data'); // Import the data from the JSON file

// Create a new employee
function createEmployee(employee) {
  data.data.push(employee);
  saveData();
}

// Read all employees
function getAllEmployees() {
  return data.data;
}

// Read an employee by ID
function getEmployeeById(id) {
  return data.data.find(employee => employee.departmentId === id);
}

// Update an employee by ID
function updateEmployeeById(id, updatedEmployee) {
  const employeeIndex = data.data.findIndex(employee => employee.departmentId === id);
  if (employeeIndex !== -1) {
    data.data[employeeIndex] = { ...data.data[employeeIndex], ...updatedEmployee };
    saveData();
    return true;
  }
  return false;
}

// Delete an employee by ID
function deleteEmployeeById(id) {
  const employeeIndex = data.data.findIndex(employee => employee.departmentId === id);
  if (employeeIndex !== -1) {
    data.data.splice(employeeIndex, 1);
    saveData();
    return true;
  }
  return false;
}

// Save the updated data to the JSON file
function saveData() {
  fs.writeFileSync('data.js', `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;`);
}

// Example usage:
createEmployee({
  "firstName": "Virat",
  "lastName": "Kohli",
  "department": "Marketing",
  "departmentId": "5",
  "gender": "Male",
  "email": "virat@gmail.com",
  "phoneNo": "7766554433"
});

console.log(getAllEmployees());

updateEmployeeById("5", { "email": "newemail@gmail.com" });

console.log(getAllEmployees());

deleteEmployeeById("2");

console.log(getAllEmployees());
