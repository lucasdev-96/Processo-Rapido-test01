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

module.exports = {
  validateInfosStudent,
  validateEmailStudent,
};
