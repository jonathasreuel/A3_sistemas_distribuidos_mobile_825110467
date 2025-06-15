const { sequelize } = require('./database');
const { Cliente, Carro } = require('../models');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    await Cliente.bulkCreate([
      { nome: 'Adalto Selau Sparremberger', email: 'adalto.sparremberger@teste.com', telefone: 11988887777 },
      { nome: 'Marivaldo Pereira dos Santos', email: 'marivaldo.santos@teste.com', telefone: 11977776666 },
      { nome: 'Ana Paula', email: 'ana.paula@teste.com', telefone: 11966665555 },
      { nome: 'João Pedro', email: 'joao.pedro@teste.com', telefone: 11955554444 },
      { nome: 'Fernanda Lima', email: 'fernanda.lima@teste.com', telefone: 11944443333 },
      { nome: 'Rafael Costa', email: 'rafael.costa@teste.com', telefone: 11933332222 },
      { nome: 'Juliana Rocha', email: 'juliana.rocha@teste.com', telefone: 11922221111 },
      { nome: 'Felipe Almeida', email: 'felipe.almeida@teste.com', telefone: 11911110000 },
      { nome: 'Bruna Martins', email: 'bruna.martins@teste.com', telefone: 11900009999 },
      { nome: 'Lucas Oliveira', email: 'lucas.oliveira@teste.com', telefone: 11899998888 },
      { nome: 'Aline Souza', email: 'aline.souza@teste.com', telefone: 11888887777 },
      { nome: 'Gustavo Mendes', email: 'gustavo.mendes@teste.com', telefone: 11877776666 },
      { nome: 'Tatiane Pereira', email: 'tatiane.pereira@teste.com', telefone: 11866665555 },
      { nome: 'Eduardo Ramos', email: 'eduardo.ramos@teste.com', telefone: 11855554444 },
      { nome: 'Patrícia Duarte', email: 'patricia.duarte@teste.com', telefone: 11844443333 },
      { nome: 'Rodrigo Lopes', email: 'rodrigo.lopes@teste.com', telefone: 11833332222 },
      { nome: 'Camila Barros', email: 'camila.barros@teste.com', telefone: 11822221111 },
      { nome: 'Thiago Nunes', email: 'thiago.nunes@teste.com', telefone: 11811110000 },
      { nome: 'Renata Freitas', email: 'renata.freitas@teste.com', telefone: 11800009999 },
      { nome: 'Daniel Moreira', email: 'daniel.moreira@teste.com', telefone: 11799998888 },
      { nome: 'Sabrina Rezende', email: 'sabrina.rezende@teste.com', telefone: 11788887777 },
      { nome: 'Marcos Antunes', email: 'marcos.antunes@teste.com', telefone: 11777776666 },
      { nome: 'Larissa Teixeira', email: 'larissa.teixeira@teste.com', telefone: 11766665555 },
      { nome: 'Pedro Henrique', email: 'pedro.henrique@teste.com', telefone: 11755554444 },
      { nome: 'Natália Faria', email: 'natalia.faria@teste.com', telefone: 11744443333 },
      { nome: 'André Viana', email: 'andre.viana@teste.com', telefone: 11733332222 },
      { nome: 'Isabela Monteiro', email: 'isabela.monteiro@teste.com', telefone: 11722221111 },
      { nome: 'Bruno Ferreira', email: 'bruno.ferreira@teste.com', telefone: 11711110000 },
      { nome: 'Luciana Borges', email: 'luciana.borges@teste.com', telefone: 11700009999 },
      { nome: 'Diego Tavares', email: 'diego.tavares@teste.com', telefone: 11699998888 }
    ]);

    await Carro.bulkCreate([
      { marca: 'Honda', modelo: 'Civic', ano: 2020, valor: 95000 },
      { marca: 'Chevrolet', modelo: 'Onix', ano: 2022, valor: 65000 },
      { marca: 'Volkswagen', modelo: 'Golf', ano: 2019, valor: 78000 },
      { marca: 'Toyota', modelo: 'Corolla', ano: 2021, valor: 105000 },
      { marca: 'Hyundai', modelo: 'HB20', ano: 2023, valor: 72000 },
      { marca: 'Chevrolet', modelo: 'Cruze', ano: 2020, valor: 88000 },
      { marca: 'Ford', modelo: 'Fiesta', ano: 2018, valor: 56000 },
      { marca: 'Ford', modelo: 'Focus', ano: 2019, valor: 73000 },
      { marca: 'Volkswagen', modelo: 'Polo', ano: 2022, valor: 77000 },
      { marca: 'Fiat', modelo: 'Argo', ano: 2021, valor: 68000 },
      { marca: 'Fiat', modelo: 'Uno', ano: 2017, valor: 39000 },
      { marca: 'Ford', modelo: 'Ka', ano: 2019, valor: 49000 },
      { marca: 'Renault', modelo: 'Sandero', ano: 2020, valor: 54000 },
      { marca: 'Renault', modelo: 'Logan', ano: 2021, valor: 58000 },
      { marca: 'Nissan', modelo: 'Versa', ano: 2022, valor: 67000 },
      { marca: 'Nissan', modelo: 'March', ano: 2018, valor: 42000 },
      { marca: 'Nissan', modelo: 'Sentra', ano: 2019, valor: 83000 },
      { marca: 'Volkswagen', modelo: 'Jetta', ano: 2020, valor: 99000 },
      { marca: 'Volkswagen', modelo: 'Passat', ano: 2018, valor: 102000 },
      { marca: 'Volkswagen', modelo: 'T-Cross', ano: 2023, valor: 118000 },
      { marca: 'Jeep', modelo: 'Renegade', ano: 2021, valor: 97000 },
      { marca: 'Jeep', modelo: 'Compass', ano: 2022, valor: 139000 },
      { marca: 'Fiat', modelo: 'Toro', ano: 2020, valor: 95000 },
      { marca: 'Fiat', modelo: 'Strada', ano: 2023, valor: 83000 },
      { marca: 'Toyota', modelo: 'Hilux', ano: 2021, valor: 185000 },
      { marca: 'Chevrolet', modelo: 'S10', ano: 2020, valor: 172000 },
      { marca: 'Renault', modelo: 'Duster', ano: 2019, valor: 75000 },
      { marca: 'Ford', modelo: 'EcoSport', ano: 2018, valor: 68000 },
      { marca: 'Chevrolet', modelo: 'Tracker', ano: 2023, valor: 113000 },
      { marca: 'Hyundai', modelo: 'Creta', ano: 2021, valor: 108000 }
    ]);

    console.log('Dados inseridos com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  }
}

seed();
