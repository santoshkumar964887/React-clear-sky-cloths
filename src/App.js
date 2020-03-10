import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/MainHomePage';

const Hats= () =>(
  <h1>Hats of Santosh  </h1>
);
function App() {
  return (
    
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hats}/>
        </Switch>
      
    </div>
  );
}

export default App;
