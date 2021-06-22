import React from "react";
import HomePage from "./page/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./page/Shop";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
