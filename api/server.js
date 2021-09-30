const express = require('express');
const bodyParser = require('body-parser');
const alunosMiddlewares = require('./middlewares/alunosMiddleware');
const alunosControllers = require('./controllers/alunosController');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.post('/aluno/cadastrar', alunosMiddlewares.validateInfosStudent, alunosControllers.createNewStudent);

app.get('/aluno/listar', alunosControllers.getStudents);

app.get('/aluno/:name', alunosControllers.getStudentByName);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Rodando com sucesso na porta ${PORT}`);
});
