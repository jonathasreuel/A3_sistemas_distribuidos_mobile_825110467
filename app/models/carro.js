const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
const Cliente = require('./cliente');

const Carro = sequelize.define('Carro', {
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'carros'
});

Cliente.hasMany(Carro, { foreignKey: 'clienteId', onDelete: 'CASCADE' });
Carro.belongsTo(Cliente, { foreignKey: 'clienteId' });

module.exports = Carro;
