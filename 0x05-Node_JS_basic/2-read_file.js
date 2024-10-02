const fs = require('fs');

function countStudents(path) {
  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  // Read the file synchronously
  const data = fs.readFileSync(path, 'utf8');
  
  // Split lines, map, and filter to get valid students
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname') // Ensure 4 fields and skip the header
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  if (students.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // Dynamically group students by their field
  const fieldGroups = {};
  
  students.forEach((student) => {
    const { field, firstName } = student;
    if (!fieldGroups[field]) {
      fieldGroups[field] = [];
    }
    fieldGroups[field].push(firstName);
  });

  // Log the total number of students
  console.log(`Number of students: ${students.length}`);

  // Log the number of students per field
  for (const field in fieldGroups) {
    const studentNames = fieldGroups[field];
    console.log(`Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}`);
  }
}

module.exports = countStudents;
