const express = require('express');
const { sequelize, waitForDatabase } = require('./app/database/database');
const clienteRoutes = require('./app/routes/clienteRoutes');
const carroRoutes = require('./app/routes/carroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/cliente', clienteRoutes);
app.use('/carro', carroRoutes);

(async () => {
  try {
    await waitForDatabase();
    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o app:', error);
    process.exit(1);
  }
})();

app.get('/', (req, res) => {
  res.json({ mensagem: 'Bem-vindo à API de Locadora de Automóveis' });
});
