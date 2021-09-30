const fs = require('fs').promises;
const path = require('path');

const arrayOfStudents = path.join(__dirname, '.', 'alunos.json');

const getStudents = async () => {
  try {
    const students = await fs.readFile(arrayOfStudents, 'utf8');
    return JSON.parse(students);
  } catch (err) {
    return 'Não foi achado os dados';
  }
};

const createNewStudent = async (name, email, birthday, registration) => {
  const students = await getStudents();
  students.push({
    name, email, birthday, registration,
  });
  await fs.writeFile(arrayOfStudents, JSON.stringify(students));
  return {
    name, email, birthday, registration,
  };
};

const getStudentByName = async (studentName) => {
  const students = await getStudents();
  const student = students.find(({ name }) => studentName.toLowerCase() === name.toLowerCase());
  return student;
};

const deleteStudentByName = async (studentName) => {
  const students = await getStudents();
  const student = students
    .findIndex(({ name }) => name.toLowerCase() === studentName.toLowerCase());
  if (student >= 0) {
    students.splice(student, 1);
    await fs.writeFile(arrayOfStudents, JSON.stringify(students));
  } else {
    return student;
  }
};

const updateStudentByName = async (studentName, name, email) => {
  const students = await getStudents();
  const student = students
    .findIndex((elem) => elem.name.toLowerCase() === studentName.toLowerCase());
  if (student >= 0) {
    students[student] = { ...students[student], name, email };
    await fs.writeFile(arrayOfStudents, JSON.stringify(students));
    return students[student];
  }
  return student;
};

module.exports = {
  createNewStudent,
  getStudents,
  getStudentByName,
  deleteStudentByName,
  updateStudentByName,
};
