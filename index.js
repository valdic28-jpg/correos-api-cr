const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Provincias simuladas
const provincias = [
  { codigo: '1', descripcion: 'San José' },
  { codigo: '2', descripcion: 'Alajuela' },
  { codigo: '3', descripcion: 'Cartago' },
  { codigo: '4', descripcion: 'Heredia' },
  { codigo: '5', descripcion: 'Guanacaste' },
  { codigo: '6', descripcion: 'Puntarenas' },
  { codigo: '7', descripcion: 'Limón' },
];

// Ruta: /provincias
app.get('/provincias', (req, res) => {
  res.json(provincias);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
