const { Sequelize } = require('sequelize'); /*utilizo Sequelize para conectar tu aplicación con PostgreSQL */

// Conectar a la base de datos
const sequelize = new Sequelize('Inmobiliaria', 'postgres', '1234', { //crea una nueva instancia de Sequelize
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize; //exporta la instancia de sequelize