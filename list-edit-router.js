const express = require('express');
const Router = express.Router();


Router.post('/crear', (req, res) => {  
    res.send('Tarea creada correctamente');
});


Router.delete('/eliminar/:id', (req, res) => {
    const tareaId = req.params.id; 
    res.send(`Tarea ${tareaId} eliminada correctamente`);
});

Router.put('/actualizar/:id', (req, res) => {
    const tareaId = req.params.id;
    res.send(`Tarea ${tareaId} actualizada correctamente`);
});

module.exports = Router;