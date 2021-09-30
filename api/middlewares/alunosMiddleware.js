const validateInfosStudent = (req, res, next) => {
  const {
    name, email,
    birthday, registration,
  } = req.body;
  if (!name || !email || !birthday || !registration) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  next();
};

const validateEmailStudent = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validateEmail = regex.test(String(email));
  if (!validateEmail) return res.status(400).json({ message: 'Formato de email inválido' });
  next();
};

const validateInfosStudentUpdate = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'name ou email não informados' });
  next();
};

module.exports = {
  validateInfosStudent,
  validateEmailStudent,
  validateInfosStudentUpdate,
};
