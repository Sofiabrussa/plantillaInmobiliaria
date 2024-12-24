const express = require('express');
const router = express.Router(); //CREO una instancia de ruta 
const TipoPropiedad = require('../models/tipoPropiedad');

router.get('/tipos-propiedad', async (req, res) => {
  try {
    const tiposPropiedades = await TipoPropiedad.findAll() ;
    res.json(tiposPropiedades); // Devuelve los resultados como JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los tipos de propiedad' });
  }
});

module.exports = router;