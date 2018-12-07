import React from "react";
import { Switch, Route } from "react-router-dom";
import Storefront from "./components/Storefront";
import ShoppingCart from "./components/ShoppingCart";

export default (
  <Switch>
    <Route exact path="/" component={Storefront} />
    <Route path="/cart" component={ShoppingCart} />
  </Switch>
);
