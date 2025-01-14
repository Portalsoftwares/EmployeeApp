const data = [
  {
    "firstName": "Sachin",
    "lastName": "Tendulkar",
    "department": "Sales",
    "departmentId": "1",
    "gender": "Male",
    "email": "sachin@gmail.com",
    "phoneNo": "9988776655"
  },
  {
    "firstName": "Rahul",
    "lastName": "Dravid",
    "department": "Marketing",
    "departmentId": "2",
    "gender": "Male",
    "email": "Rahul@gmail.com",
    "phoneNo": "8877665544"
  },
  {
    "firstName": "Mahendra Singh",
    "lastName": "Dhoni",
    "department": "RnD",
    "gender": "Male",
    "departmentId": "4",
    "email": "Mahendra@gmail.com",
    "phoneNo": "4455667788"
  },
  {
    "firstName": "Rohit",
    "lastName": "Sharma",
    "department": "Sales",
    "departmentId": "2",
    "gender": "Male",
    "email": "Rohit@gmail.com",
    "phoneNo": "1122334455"
  }
];

// Now, you can export this data as a JavaScript file
const fs = require('fs');

const jsonData = JSON.stringify({ data }, null, 2);
fs.writeFileSync('data.js', `const data = ${jsonData};\n\nexport default data;`);

console.log('Data has been written to data.js');
