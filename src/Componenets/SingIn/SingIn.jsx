import React,{Component} from 'react';
import './singIn.style.scss';
import FormInput from '../formInput/FormInput';
import Button from '../Button/Button';
class Singin extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        };
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'',password:''})
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
    
                    <Button type="submit"> SIGNIN</Button>
                </form>
            </div>

        )
    }
}
export default Singin;