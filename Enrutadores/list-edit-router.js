  const { Router } = require("express");
const router = Router();

const ValidarError = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "El cuerpo de la solicitud  está vacío." });
  }
  next();
};


function ValidarDatos(req, res, next) {
  const { description, indicator, completed } = req.body;

  if (!description || !indicator || typeof completed === "undefined") {
    return res.status(400).json({ error: "Parámetros incompletos o faltantes" });
  }

  next();
}



const tareas = [
  { id: 2, description: "", indicator: "", completed: "true"},
  { id: 1, description: "", indicator: "", incompleta: "false"}
];

router.post("/crear", ValidarError, ValidarDatos, (req, res, next) => {
  const { indicator, description, completed } = req.body;

  
  const newTarea = {
    id: Date.now(),
    indicator,
    description,
    completed,
  };

 
  tareas.push(newTarea);


  res.status(201).json({ message: "Tarea creada con éxito", tarea: newTarea });
});




// Ruta para actualizar una tarea por su ID
router.put("/actualizar/:id", ValidarError, ValidarDatos, (req, res, next) => {
  const id = req.params.id;
  const { indicator, description, completed } = req.body;

 
  const tareaIndex = tareas.findIndex((t) => t.id == id);

  if (tareaIndex !== -1) {
    
    tareas[tareaIndex].indicator = indicator;
    tareas[tareaIndex].description = description;
    tareas[tareaIndex].completed = completed;

   
    res.status(200).json({ message: "Tarea actualizada con éxito", tarea: tareas[tareaIndex] });
  } else {
    
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

module.exports = router;



