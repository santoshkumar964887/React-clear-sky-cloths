import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/MainHomePage';
import ShopPage from './Componenets/ShopPage/shopPage';
import Header from './Componenets/Header/header';
import SinginSingup from './Pages/SingIn-SingUp/SingIn-SinUp';
import {auth} from './Componenets/fireBase/FireBase';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser: null
    };
    
  }
  unsubscribeFromAuth= null;
  
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(usre=>{
      this.setState({currentUser:usre})
      console.log(usre);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SinginSingup}/>
        </Switch>
      
    </div>
  );
  }
}

export default App;
