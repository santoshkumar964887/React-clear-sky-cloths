import React from "react";
import HomePage from "./page/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./page/Shop";
import Header from "./components/Header";
import SignInAndSignUpPage from "./page/SignInSignUp";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
