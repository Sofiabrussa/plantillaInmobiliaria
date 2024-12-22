const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoOperacion = sequelize.define('tipoOperacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'tipo_operacion', // Nombre de la tabla en la base de datos
    timestamps: true

});

module.exports = TipoOperacion;