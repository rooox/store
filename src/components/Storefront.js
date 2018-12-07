import React, { Component } from "react";
import axios from "axios";

export default class Storefront extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    let products = await axios.get("/api/products");
    this.setState({ products: products.data });
    console.log(products.data);
  }

  async addToCart(id) {
    await axios.post(`/api/cart/${id}`);
    console.log(id);
  }

  render() {
    let displayProducts = this.state.products.map(product => {
      return (
        <div
          key={product.id}
          style={{
            height: "200px",
            width: "200px",
            borderStyle: "solid",
            borderColor: "black",
            margin: "4px",
            background: "grey"
          }}
        >
          <h4>{product.name}</h4>
          <h4>${product.price}</h4>
          <h4>{product.description}</h4>
          <button onClick={() => this.addToCart(product.id)}>
            Add To Cart
          </button>
        </div>
      );
    });

    return (
      <div>
        <h1>Store</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {displayProducts}
        </div>
      </div>
    );
  }
}
