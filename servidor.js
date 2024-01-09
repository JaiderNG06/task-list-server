const express = require('express');
const app = express();
const PORT = 3000;
const router1 = require('./list-view-router');
const router2 = require('./list-edit-router');



app.get('/tareas', (req, res) => {
  res.json(tareas);
});



app.use( "/list", router1);
app.use( "/list", router2);


app.listen(PORT, () => {
  console.log(`Servidor iniciado en el http://localhost:3000`);
});
