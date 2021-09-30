const alunosModel = require('../models/alunosModel');

const createNewStudent = async (req, res) => {
  const {
    name, email,
    birthday, registration,
  } = req.body;
  const newStudent = await alunosModel.createNewStudent(name, email, birthday, registration);
  res.status(200).json({ student: newStudent });
};

const getStudents = async (_req, res) => {
  const students = await alunosModel.getStudents();
  if (students.length === 0) return res.status(404).json({ message: 'Sem cadastros de alunos' });
  res.status(200).json({ students });
};

const getStudentByName = async (req, res) => {
  const { name } = req.params;
  const student = await alunosModel.getStudentByName(name);
  if (!student) return res.status(404).json({ message: 'Estudante não encontrado' });
  res.status(200).json(student);
};

module.exports = {
  createNewStudent,
  getStudents,
  getStudentByName,
};
