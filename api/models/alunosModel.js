const fs = require('fs').promises;
const path = require('path');

const arrayOfStudents = path.join(__dirname, '.', 'alunos.json');

const getStudents = async () => {
  try {
    const students = await fs.readFile(arrayOfStudents, 'utf8');
    console.log(students);
    return JSON.parse(students);
  } catch (err) {
    return 'Não foi achado os dados';
  }
};

const createNewStudent = async (nome, email, dataNascimento, numeroMatricula) => {
  const students = await getStudents();
  students.push({
    nome, email, dataNascimento, numeroMatricula,
  });
  await fs.writeFile(arrayOfStudents, JSON.stringify(students));
};
