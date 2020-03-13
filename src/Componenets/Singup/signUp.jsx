import React,{Component} from 'react';
import FormInput from '../formInput/FormInput';
import Buttons from '../Button/Button';
import {auth,createUserProfile} from '../fireBase/FireBase';
import './signUp.style.scss';
class SignUp extends Component{
    constructor(){
        super();
        this.state={
            Name:'',
            Email:'',
            Password:'',
            ConfirmPassword:''
        };
    }
    handelSubmit= async(e)=>{
        e.preventDefault();
        const {Name, Email, Password,ConfirmPassword}= this.state;
        if (Password!== ConfirmPassword){
            alert("Password Don't Match");
            return;
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(Email,Password);
            await createUserProfile(user, {Name});
           this.setState({
            Name:'',
            Email:'',
            Password:'',
            ConfirmPassword:''

        })
        }
        catch (error){
            console.error(error);
        }

        
    }

    handleChange =(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value});
    }

render(){
    const {Name, Email, Password,ConfirmPassword}= this.state;
    return(
        <div className="singup">
            <h2 className="title">I do not have a account</h2>
            <span> Sign up with your email and password</span>
            <form action="" className="SingUp" onSubmit={this.handelSubmit}>
        <FormInput type='text' name='Name' value={Name} onChange={this.handleChange} label='Name'
        />
        <FormInput type='email' name='Email' value={Email} onChange={this.handleChange} label='Email'
        />
        <FormInput type='password' name='Password' value={Password} onChange={this.handleChange} label='Password'
        />
        <FormInput type='password' name='ConfirmPassword' value={ConfirmPassword} handelChange={this.handleChange} label='Confirm Password'
        />
        <Buttons type ='submit'>SIGN UP</Buttons>
        </form>
        </div> 

    )
}

}
export default SignUp;