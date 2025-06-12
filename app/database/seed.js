const { sequelize } = require('./database');
const { Cliente, Carro } = require('../models');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    const clientes = await Cliente.bulkCreate([
      { nome: 'Maria', email: 'maria@teste.com', telefone: '11988887777' },
      { nome: 'Carlos', email: 'carlos@teste.com', telefone: '11977776666' }
    ]);

    await Carro.bulkCreate([
      { modelo: 'Civic', ano: 2020, valor: 95000, clienteId: clientes[0].id },
      { modelo: 'Onix', ano: 2022, valor: 65000, clienteId: clientes[0].id },
      { modelo: 'Golf', ano: 2019, valor: 78000, clienteId: clientes[1].id }
    ]);

    console.log('Dados inseridos com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  }
}

seed();
