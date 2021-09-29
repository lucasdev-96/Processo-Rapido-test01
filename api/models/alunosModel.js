const fs = require('fs').promises;
const path = require('path');

const arrayOfStudents = path.join(__dirname, '.', 'alunos.json');

const getStudents = async () => {
  try {
    const students = await fs.readFile(arrayOfStudents, 'utf8');
    return students;
  } catch (err) {
    return 'Não foi achado os dados';
  }
};
