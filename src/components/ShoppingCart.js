import React, { Component } from "react";
import axios from "axios";

export default class ShoppingCart extends Component {
  state = {
    cartItems: []
  };
  async componentDidMount() {
    let cartItems = await axios.get("/api/cart");
    this.setState({ cartItems: cartItems.data });
    console.log(this.state, cartItems);
  }

  async getCartItems() {
    let cartItems = await axios.get("/api/cart");
    this.setState({ cartItems: cartItems.data });
  }

  async removeFromCart(id) {
    await axios.delete(`/api/product/${id}`);
    this.getCartItems();
  }

  async addOne(id) {
    await axios.put(`/api/cart/${id}`);
    this.getCartItems();
  }

  async minusOne(id) {
    await axios.put(`/api/cartremove/${id}`);
    this.getCartItems();
  }

  async clearCart() {
    await axios.delete("/api/cart");
    this.getCartItems();
  }
  render() {
    let displayCartItems = this.state.cartItems.map(item => {
      return (
        <div
          key={item.id}
          style={{
            height: "200px",
            width: "200px",
            borderStyle: "solid",
            borderColor: "black",
            margin: "4px",
            backgroundColor: "grey"
          }}
        >
          <h4>{item.name}</h4>
          <h4>{item.price}</h4>
          <h4>{item.description}</h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{ margin: "3px" }}
              onClick={() => this.removeFromCart(item.id)}
            >
              Remove Item
            </button>
            <button
              style={{ margin: "3px" }}
              onClick={() => this.minusOne(item.id)}
            >
              -
            </button>
            <p style={{ margin: "3px" }}>{item.quantity}</p>
            <button
              style={{ margin: "3px" }}
              onClick={() => this.addOne(item.id)}
            >
              +
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {displayCartItems}
        </div>
        <button onClick={() => this.clearCart()}>Checkout</button>
      </div>
    );
  }
}
