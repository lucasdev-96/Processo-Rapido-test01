



## 📝 Sumário

- [Objetivos do Projeto](#objetivos)
- [Tecnologias Utilizadas](#tecnologias)
- [Para Iniciar o Projeto](#iniciar)


<div id="objetivos">
 
 -Criar rota para cadastrar alunos
 
 -Criar rota para listar alunos

 -Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão - CRUD

<div id="tecnologias">

##  ⚒️ Tecnologias Utilizadas
<div>
  <img src="https://img.shields.io/badge/-Node-green?style=flat-square&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/-JavaScript-yellow?style=flat-square&logo=JavaScript&logoColor=white">
  <img src="https://img.shields.io/badge/-Express.js-black?style=flat-square&logo=Express.js&logoColor=white">
  <img src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white">
</div>
 
 <div id="iniciar">
 <h3>Para Iniciar o Projeto</h3>

```bash 
 npm install
 npm run dev
 ```

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



