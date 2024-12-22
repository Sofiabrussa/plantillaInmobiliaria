const express = require('express');
const router = express.Router(); //CREO una instancia de ruta 
const Propiedad = require('../models/propiedad');

// Obtener todas las propiedades
router.get('/propiedades', async (req, res) => {
    try {
        const propiedades = await Propiedad.findAll();
        res.status(200).json(propiedades);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener propiedades', error });
    }
});

module.exports = router;
