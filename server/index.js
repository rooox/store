require("dotenv").config();
const express = require("express");
const massive = require("massive");
const bodyParser = require("body-parser");
const ctrl = require("./controller");

const { PORT, CONNECTION_STRING, SECRET, NODE_ENV } = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Connected to the db");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/api/products", ctrl.getProducts);
app.get("/api/cart", ctrl.getCart);
app.post("/api/cart/:id", ctrl.addItem);
app.delete("/api/cart", ctrl.clearCart);
app.put("/api/cart/:id", ctrl.plusOne);
app.put("/api/cartremove/:id", ctrl.minusOne);
// app.delete("/api/cartclear", ctrl.clearCart);
app.delete("/api/product/:id", ctrl.removeProduct);

app.listen(PORT, () => {
  console.log(`The vessel is docked at port ${PORT}`);
});
