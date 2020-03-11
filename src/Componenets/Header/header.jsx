import React from 'react';
import './Header.Style.scss';
import {Link} from 'react-router-dom';
import{ReactComponent as Logo} from '../Asset/crownLogo.svg';
const Header=()=>(
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
    </div>
    
</div>    

);
export default Header;