const express = require('express');
const Router = express.Router();

const tareas = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar para el examen', completed: true },
    { id: 3, description: 'Hacer ejercicio', completed: false },
  ];
  
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