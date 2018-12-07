module.exports = {
  async getProducts(req, res) {
    let db = req.app.get("db");
    let results = await db.get_products();
    res.status(200).send(results);
  },

  async getCart(req, res) {
    let db = req.app.get("db");
    let results = await db.get_cart();
    res.status(200).send(results);
  },

  async addItem(req, res) {
    let db = req.app.get("db");
    let id = req.params.id;
    await db.add_item([id, 1]);
    res.sendStatus(200);
  },

  clearCart(req, res) {
    let db = req.app.get("db");
    db.clear_cart()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.staus(500).send(err);
      });
  },
  //     res.sendStatus(200).catch(err => {
  //       console.log(err);
  //       res.staus(500).send(err);
  //     });
  //   },

  async plusOne(req, res) {
    let db = req.app.get("db");
    let id = req.params.id;
    await db.add_one(id);
    res.sendStatus(200);
  },
  async minusOne(req, res) {
    let db = req.app.get("db");
    let id = req.params.id;
    await db.minus_one(id);
    res.sendStatus(200);
  },

  async removeProduct(req, res) {
    let db = req.app.get("db");
    let id = req.params.id;
    await db.remove_product(id);
    res.sendStatus(200);
  }
};

// app.post("/api/cart", ctrl.addItem);
// app.delete("/api/cart", ctrl.clearCart);
// app.put("/api/cart/:id", ctrl.addOne);
// app.put("/api/cartremove/:id", ctrl.removeOne);
// app.delete("/api/cartclear", ctrl.clearCart);
// app.delete("/api/product", ctrl.removeProduct);
