const { Router } = require("express");
const router = Router();

const tareas = [
  { id: 2, description: "bailar", indicator: "dancehall", completed: true },
  { id: 1, description: "comer", indicator: "", completed: false }
];

const validarError = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "El cuerpo de la solicitud está vacío." });
  }
  next();
};

function validarDatos(req, res, next) {
  const { description, indicator, completed } = req.body;

  if (!description || !indicator || typeof completed === "undefined") {
    return res.status(400).json({ error: "Parámetros incompletos o faltantes" });
  }

  next();
}

router.get('/tareas', (req, res) => {
  res.json({ tareas: tareas });
});

router.get('/completas/:id', validarDatos, validarError, (req, res) => {
  const userId = req.params.id;
  const tareasCompletas = tareas.filter((t) => t.completed === true);
  res.json({ message: `Estás viendo las tareas completas del usuario con ID ${userId}`, tareas: tareasCompletas });
});

router.get('/incompletas/:id', validarDatos, validarError, (req, res) => {
  const userId = req.params.id;
  const tareasIncompletas = tareas.filter((t) => t.completed === false);
  res.json({ message: `Estás viendo las tareas incompletas del usuario con ID ${userId}`, tareas: tareasIncompletas });
});

module.exports = router;