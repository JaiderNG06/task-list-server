const express = require('express');
const app = express();
const PORT = 3000;
const router1 = require('./Enrutadores/list-view-router');
const router2 = require('./Enrutadores/list-edit-router');


const validarMetodo = ['GET', 'POST', 'PUT', 'DELETE'];

const validacion = (req, res, next) => {
  if (!validarMetodo.includes(req.method)) {
    return res.status(400).json({ error: 'Método HTTP no válido.' });
  }
  next();
};

app.use(validacion);
app.use(express.json());
app.use("/list", router1);
app.use("/list", router2);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el http://localhost:${PORT}`);
});

module.exports = app;