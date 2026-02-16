require('dotenv').config();

console.log('--- TESTE DE VARIÁVEIS ---');
console.log('Host:', process.env.DATABASE_HOST);
console.log('User:', process.env.DATABASE_USERNAME);
console.log('Pass:', process.env.DATABASE_PASSWORD);
console.log('DB:', process.env.DATABASE);
console.log('--------------------------');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mariadb',
    dialectOptions: {
      connectTimeout: 60000 // Forçando 60 segundos aqui no teste
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('CONECTOU COM SUCESSO!'))
  .catch(err => console.error('ERRO AO CONECTAR:', err));
