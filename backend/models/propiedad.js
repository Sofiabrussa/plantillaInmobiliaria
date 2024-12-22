const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Aquí importas la configuración de la base de datos
const TipoOperacion = require('./tipoOperacion');
const TipoPropiedad = require('./tipoPropiedad');


const Propiedad = sequelize.define('Propiedad', {
    // Definición de las columnas de la tabla
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    tipooperacion: {
        type: DataTypes.INTEGER,
        field: 'tipooperacion', 
        references: {
            model: TipoOperacion,
            key: 'id'
        },
        allowNull: false
    },
    tipopropiedad: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoPropiedad,
            key: 'id'
        },
        allowNull: false
    },
    expensas: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    superficie: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    ambientes: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    habitacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    baño: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    antiguedad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    // Opciones adicionales para el modelo
    tableName: 'propiedades', // Nombre de la tabla en la base de datos
    timestamps: true
});


// Relación: Una propiedad "pertenece a" un tipo de operación
Propiedad.belongsTo(TipoOperacion, { foreignKey: 'tipooperacion', as: 'tipoOperacion' });
Propiedad.belongsTo(TipoPropiedad, { foreignKey: 'tipopropiedad', as: 'tipoPropiedad' });

// Relación inversa: Un tipo de operación "tiene muchas" propiedades
TipoOperacion.hasMany(Propiedad, { foreignKey: 'tipooperacion', as: 'propiedadesOperacion' });
TipoPropiedad.hasMany(Propiedad, { foreignKey: 'tipopropiedad', as: 'propiedadesPropiedad' });


module.exports = Propiedad;