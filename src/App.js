import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "black",
            height: "57px",
            width: "100vw",
            background: "#757559",
            color: "BLACK",
            borderWidth: "3px",
            borderStyle: "solid"
          }}
        >
          <div style={{ position: "relative" }}>
            <h6
              style={{
                position: "absolute",
                fontSize: "40px",
                top: "-88px",
                marginLeft: "10px"
              }}
            >
              svägattack
            </h6>
          </div>
          <div
            style={{
              display: "flex"
            }}
          >
            <Link to="/">
              <h5
                style={{
                  margin: "8px",
                  color: "black",
                  fontSize: "31px",
                  styling: "none"
                }}
              >
                store
              </h5>
            </Link>
            <Link to="/cart">
              <h5
                style={{
                  margin: "8px",
                  marginRight: "14px",
                  color: "black",
                  fontSize: "31px",
                  styling: "none"
                }}
              >
                shopping cart
              </h5>
            </Link>
          </div>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
