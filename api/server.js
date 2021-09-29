const express = require('express');

const PORT = 3000;

const app = express();

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Rodando com sucesso na porta ${PORT}`);
});
