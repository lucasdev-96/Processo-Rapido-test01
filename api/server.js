const express = require('express');
const bodyParser = require('body-parser');
const alunosMiddlewares = require('./middlewares/alunosMiddleware');
const alunosControllers = require('./controllers/alunosController');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.post('/aluno/cadastrar', alunosMiddlewares.validateInfosStudent, alunosMiddlewares.validateEmailStudent, alunosControllers.createNewStudent);

app.get('/aluno/listar', alunosControllers.getStudents);

app.get('/aluno/:name', alunosControllers.getStudentByName);

app.delete('/aluno/:name', alunosControllers.deleteStudentByName);

app.put('/aluno/:nome', alunosMiddlewares.validateInfosStudentUpdate, alunosMiddlewares.validateEmailStudent, alunosControllers.updateStudentByName);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Rodando com sucesso na porta ${PORT}`);
});
