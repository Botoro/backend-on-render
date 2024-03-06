// Importar las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');

// Crear una instancia de Express
const app = express();
const port = 3000; // Puerto en el que correrá el servidor

// Configurar body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Definir rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

// Ejemplo de una ruta para obtener datos
app.get('/api/data', (req, res) => {
  // Simular datos de respuesta (podrían venir de una base de datos, etc.)
  const data = {
    message: 'Estos son los datos que solicitaste',
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  };
  // Enviar la respuesta como un objeto JSON
  res.json(data);
});

// Ejemplo de una ruta para agregar datos
app.post('/api/data', (req, res) => {
  // Se espera que los datos a agregar estén en el cuerpo de la solicitud
  const newData = req.body;
  // Realizar operaciones necesarias con los datos (guardar en una base de datos, etc.)
  // Por simplicidad, aquí solo se devuelve un mensaje indicando que los datos se recibieron correctamente
  res.send('Datos recibidos correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
