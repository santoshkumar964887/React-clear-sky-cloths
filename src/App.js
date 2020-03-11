import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/MainHomePage';
import ShopPage from './Componenets/ShopPage/shopPage';
import Header from './Componenets/Header/header';
import SinginSingup from './Pages/SingIn-SingUp/SingIn-SinUp';

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/singin' component={SinginSingup}/>
        </Switch>
      
    </div>
  );
}

export default App;
