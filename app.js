import express from 'express';

const app = express();
// Usa el puerto que proporcione el servidor de producción o el 3000 por defecto
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola, estamos aprendiendo express con la ficha 3407184');
});

app.listen(PORT, () => {
  console.log(`Servidor en producción corriendo en el puerto: ${PORT}`);
});