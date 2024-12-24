const express = require('express');  // Importa Express
const app = express();  //Hago una instancia de express
const Propiedad = require('./models/propiedad'); // Importa el modelo
const TipoOperacion = require('./models/tipoOperacion');
const TipoPropiedad = require('./models/tipoPropiedad');
const propiedadesRoutes = require('./routes/propiedades'); //Importo la ruta propiedades
const tipoPropiedadRoutes = require('./routes/tipo_propiedades');

const sequelize = require('./config/database');
const cors = require('cors');

// Configuración básica de CORS
app.use(cors({
  origin: 'http://localhost:3001', // Dirección de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  credentials: true // Si necesitas enviar cookies o autenticación
}));

// Verificar la conexión a la base de datos
sequelize.authenticate()  // intenta establecer una conexión con la base de datos utilizando los parámetros que definiste en database.js
  .then(() => {
    console.log('Conexión establecida con la base de datos');
    // Conectar y sincronizar el modelo con la base de datos
    sequelize.sync({ alter: true })  // { force: false } no borra las tablas existentes
      .then(() => {
        console.log('Tablas sincronizadas con la base de datos');
      })
      .catch((error) => {
        console.error('Error al sincronizar las tablas:', error);
      });
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });


// RUTAS
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});
app.use('/api', propiedadesRoutes); // Asocia las rutas al prefijo /api
app.use('/api', tipoPropiedadRoutes);


// Configurar el puerto y iniciar el servidor
const port = 3000;
app.listen(port, () => { //inicia tu servidor Express y hace que tu backend esté escuchando en un puerto específico (port)
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});