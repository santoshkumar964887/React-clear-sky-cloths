import React from 'react';
import './Header.Style.scss';
import {Link} from 'react-router-dom';
import{ReactComponent as Logo} from '../Asset/crownLogo.svg';
import {auth} from '../fireBase/FireBase';
const Header=(props)=>(
<div className="header">
    <Link className='linkLogo' to='/'> 
    <Logo className='logo' />
    </Link>
    <div className="optionsContainer">
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
        {
            props.currentUser?
            <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
    </div>
    
</div>    

);
export default Header;