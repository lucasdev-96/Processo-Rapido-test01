const validateInfosStudent = (req, res, next) => {
  const {
    name, email,
    birthday, registration,
  } = req.body;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validateEmail = regex.test(String(email));
  if (!name || !email || !birthday || !registration || !validateEmail) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  next();
};

module.exports = {
  validateInfosStudent,
};
