import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/MainHomePage';
import ShopPage from './Componenets/ShopPage/shopPage';
import Header from './Componenets/Header/header';
import SinginSingup from './Pages/SingIn-SingUp/SingIn-SinUp';
import {auth,createUserProfile} from './Componenets/fireBase/FireBase';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User.Reduce/Action';
class App extends React.Component {
  
  unsubscribeFromAuth= null;
  
  componentDidMount(){
    const {setCurrentUser}= this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async usreAuth=>{
      if(usreAuth){

        const userRef=await createUserProfile(usreAuth);
        userRef.onSnapshot(snap=>{
          setCurrentUser({
              id:snap.id,
              ...snap.data()
            });
        
        }

          );
      }
      else{
        setCurrentUser(usreAuth);
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SinginSingup}/>
        </Switch>
      
    </div>
  );
  }
}
const mapDispatchToProps= dispatch=>({

 setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null,mapDispatchToProps)(App);
