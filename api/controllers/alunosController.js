const alunosModel = require('../models/alunosModel');

const createNewStudent = async (req, res) => {
  const {
    name, email,
    birthday, registration,
  } = req.body;
  const newStudent = await alunosModel.createNewStudent(name, email, birthday, registration);
  res.status(200).json({student: newStudent });
};

const getStudents = async (_req, res) => {
    const students = await alunosModel.getStudents();
    if(!students) return res.status(404).json({message: 'Not Found!'})
    res.status(200).json({ students});
}

module.exports = {
  createNewStudent,
  getStudents
};
