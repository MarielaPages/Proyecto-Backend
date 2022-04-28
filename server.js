// server.js
// where your node app starts

const express = require("express");
const app = express();
const Contenedor = require('./PagesMarielaDesafio4.js')

const archivoNuevo = new Contenedor('productos.txt');

app.get("/productos", async (request, response) => {
  let products = await archivoNuevo.getAll();
  response.send(`products`);
});

app.get("/productoRandom", async (request, response) => {
  let products = await archivoNuevo.getAll();
  response.send(`products`);
});

// listen for requests 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
