const express = require('express');
const Router = express.Router();


Router.get('/completas', (req, res) => {   
    res.send('Lista de tareas completas');
});


Router.get('/incompletas', (req, res) => {
    res.send('Lista de tareas incompletas');
});

module.exports = Router;