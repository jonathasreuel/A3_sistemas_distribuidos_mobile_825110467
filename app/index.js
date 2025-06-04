const express = require('express');
const app = express();

// Define a porta (padrão: 3000 ou usa a definida pelo ambiente)
const PORT = process.env.PORT || 3000;

// Rota básica
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
