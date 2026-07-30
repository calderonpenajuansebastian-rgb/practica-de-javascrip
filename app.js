import express from 'express';

const app = express();

// Middleware para recibir JSON
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hola, estamos aprendiendo express con la ficha 3407184');
});

app.get('/productos', (req, res) => {
  res.send(`
    <h1>Lista de productos</h1>
    <ol>
      <li>Televisor</li>
      <li>Celular</li>
      <li>Impresora</li>
    </ol>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor en producción corriendo en el puerto: ${PORT}`);
});