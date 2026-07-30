import express from 'express';

const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Puerto del servidor
const PORT = process.env.PORT || 4000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola, estamos aprendiendo Express con la ficha 3407184');
});

// Lista de productos
app.get('/productos', (req, res) => {
  const orden = req.query.orden ||"sin orden";
  const pagina = req.query.pagina || 1;
  res.send(`<h1>Lista de productos en orden ${orden} ,en la pagina ${pagina}</h1>
    <h1>Lista de productos</h1>
    <ol>
      <li>Televisor</li>
      <li>Celular</li>
      <li>Impresora</li>
      <li>Estufa</li>
    </ol>
  `);
});

// Parámetro simple
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola, ${nombre}, bienvenido`);
});

// Parámetro simple único
app.get('/producto/:nombre', (req, res) => {
  const nombre = req.params.nombre;

  const producto = {
    id: 1,
    nombre: nombre,
    cantidadStock: 25,
    precioUnitario: 1500000,
    categoria: "Tecnología"
  };

  res.json(producto);
});

// Múltiples parámetros en la ruta
app.get('/producto/:categoria/:id', (req, res) => {
  const categoria = req.params.categoria;
  const id = req.params.id;

  const productos = [
    {
      id: 1,
      categoria: categoria,
      cantidadStock: 25,
      precioUnitario: 1500000,
      nombre: "Televisor"
    },
    {
      id: 2,
      categoria: categoria,
      cantidadStock: 15,
      precioUnitario: 800000,
      nombre: "Celular"
    },
    {
      id: 3,
      categoria: categoria,
      cantidadStock: 20,
      precioUnitario: 1200000,
      nombre: "Impresora"
    },
    {
      id: 4,
      categoria: categoria,
      cantidadStock: 10,
      precioUnitario: 2000000,
      nombre: "Estufa"
    }
  ];

  // Buscar el producto por id
  const producto = productos.find(p => p.id == id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({
      mensaje: "Producto no encontrado"
    });
  }
});
app.get('/usuarios/:id/posts', (req, res) => {
  const id = req.params.id;
  const orden = req.query.orden;

  const posts = [
    {
      id: 1,
      userId: id,
      title: "Mi primer post",
      body: "Este es el contenido de mi primer post"
    }
  ];

  res.json({
    usuario: id,
    orden: orden,
    publicaciones: posts
  });
});



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en producción corriendo en el puerto: ${PORT}`);
}); 