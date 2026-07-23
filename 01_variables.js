const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("¡Hola, Express!");
});

app.get("/saludo", (req, res) => {
    res.send("Hola Juan, bienvenido a Express");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});