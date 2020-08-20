import React,{Component} from 'react';
import './singIn.style.scss';
import FormInput from '../formInput/FormInput';
import Buttons from '../Button/Button';
import {signInWithGoogle, auth } from '../fireBase/FireBase';
class Singin extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        };
        
    }
    handleSubmit=async e=>{
        e.preventDefault();
        const {email,password}=this.state;
        try{
        await auth.signInWithEmailAndPassword(email,password);
        

        this.setState({email:'',password:''});
    }
    catch(error){
        console.error(error);
    }
    }
    onchange=e=>{

        const {value,name}=e.target
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="singin">
                <h2>I already have an account</h2>
                <span>Sing In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email'  handelChange={this.onchange} value={this.state.email} label='Email' required/>
   
                    <FormInput type="password" name='password' handelChange={this.onchange}  value={this.state.password} label='Password' required/>
                    <div className="buttonContainer">
                    <Buttons type="submit"> SIGN IN</Buttons>
                    <Buttons onClick={signInWithGoogle} IsGoogleSignIn> SIGN IN WITH GOOGLE</Buttons>
                    </div>
                </form>
                
            </div>

        )
    }
}
export default Singin;