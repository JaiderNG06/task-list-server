const express = require('express');
const app = express();
const PORT = 3000;

const tareas = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar para el examen', completed: true },
    { id: 3, description: 'Hacer ejercicio', completed: false },
  ];
  
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el http://localhost:3000`);
  });
  