// server.js
// where your node app starts

const express = require("express");
const app = express();
const Contenedor = require('./PagesMarielaDesafio4.js')

const archivoNuevo = new Contenedor('productos.txt');

app.get("/productos", (request, response) => {
  response.send(``);
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
