const express = require('express');
const { sequelize, waitForDatabase } = require('./app/database/database');
const clienteRoutes = require('./app/routes/clientesRoutes');
const carroRoutes = require('./app/routes/carrosRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/clientes', clienteRoutes);
app.use('/carros', carroRoutes);

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
