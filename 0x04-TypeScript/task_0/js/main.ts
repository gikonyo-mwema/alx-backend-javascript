interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Kariuki",
    lastName: "Mathai",
    age: 20,
    location: "Nyeri",
};

const student2: Student = {
    firstName: "Cecilia",
    lastName: "Njoki",
    age: 27,
    location: "Nakuru",
},

const studentsList: Student[] = [student1, student2];


const tableBody = document.getElementById('studentTableBody');


studentsList.forEach((student) => {
row.innerHTML = `
  <td>${student.firstName}</td>
  <td>${student.location}</td>
`;
  tableBody.appendChild(row);
});
