
<h3>Para rodar o projeto</h3>

<li>Primeiro rode o comando: npm install</li>
<li>Segundo rode o comando: npm run dev</li>

---


<h3>Para fazer requisicoes na api</h3>

<li>Primeiro acesse http://localhost:3000/ mais o path</li>
<li>Use o Insomnia, Postman ou Httpie</li> 


<h3>CRUD</h3>

<li>Para cadastrar usuário no método POST na rota /aluno/cadastrar, na requisicao tem que ter as seguintes chaves:  (name, email, birthday, registration)</li>
<li>Para visualizar os alunos a rota tem que ser no metodo GET: /aluno/listar</li>
<li>Para filtrar o aluno por nome utilize o método GET no path /aluno/passeONomeDoALuno
<li>Para excluir aluno utilize o método DELETE no path /aluno/passONomeDoAluno</li>
<li>Para atualizar um aluno utlize o método PUT no path /aluno/passONomeDoAluno passando no body as chaves name, email</li>
