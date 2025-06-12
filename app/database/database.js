const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  'root',
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

async function waitForDatabase(retries = 10, delay = 3000) {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Tentando conectar ao banco (tentativa ${i + 1}/${retries})...`);
      await sequelize.authenticate();
      console.log('Conexão com banco estabelecida!');
      return;
    } catch (error) {
      console.error('Falha ao conectar:', error.message);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error('Falha ao conectar com o banco de dados após várias tentativas.');
}

module.exports = { sequelize, waitForDatabase };
