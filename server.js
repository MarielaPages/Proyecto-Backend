// server.js
// where your node app starts

const express = require("express");
const app = express();
const Contenedor = require("./PagesMarielaDesafio4.js");

const archivoNuevo = new Contenedor("productos.txt");

app.get("/productos", async (request, response) => {
  let products = await archivoNuevo.getAll();
  response.send(`products`);
});

app.get("/productoRandom", async (request, response) => {
  let products = await archivoNuevo.getAll();
  let productRandomId = Math.floor(Math.random() * products.length) + 1;
  let randomProduct = {};
  products.forEach((product) => {
    if (product.id === productRandomId) {
      randomProduct = product;
    }
  });
  response.send(`randomProduct`);
});

// listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
