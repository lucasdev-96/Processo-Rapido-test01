const alunosModel = require('../models/alunosModel');

const createNewStudent = async (req, res) => {
  const {
    name, email,
    birthday, registration,
  } = req.body;
  const newStudent = await alunosModel.createNewStudent(name, email, birthday, registration);
  res.status(201).json({ student: newStudent });
};

const getStudents = async (_req, res) => {
  const students = await alunosModel.getStudents();
  if (students.length === 0) return res.status(404).json({ message: 'Sem cadastros de alunos' });
  res.status(200).json({ students });
};

const getStudentByName = async (req, res) => {
  const { name } = req.params;
  const student = await alunosModel.getStudentByName(name);
  if (!student) return res.status(404).json({ message: 'Aluno não encontrado!' });
  res.status(200).json(student);
};

const deleteStudentByName = async (req, res) => {
  const { name } = req.params;
  const student = await alunosModel.deleteStudentByName(name);
  if (student < 0) return res.status(404).json({ message: 'Aluno não encontrado!' });
  res.status(202).json({ message: 'Aluno excluído com sucesso' });
};

const updateStudentByName = async (req, res) => {
  const { nome } = req.params;
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'name ou email não informados' });
  const student = await alunosModel.updateStudentByName(nome, name, email);
  if (student < 0) return res.status(404).json({ message: 'Aluno não encontrado' });
  res.status(200).json(student);
};

module.exports = {
  createNewStudent,
  getStudents,
  getStudentByName,
  deleteStudentByName,
  updateStudentByName,
};
