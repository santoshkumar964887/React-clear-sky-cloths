import React from 'react';
import './Header.Style.scss';
import {Link} from 'react-router-dom';
import{ReactComponent as Logo} from '../Asset/crownLogo.svg';
import {auth} from '../fireBase/FireBase';
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/cartIcon';
import CardDropDown from '../CardDropDown/cardDropDown';
import {selectCartHiddn,selectCurrentUser} from '../../Redux/cart/user.Selector';
import {createStructuredSelector} from 'reselect';

const Header=({currentUser,Hidden})=>(
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
            currentUser?
            <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon/>
    </div>
    {
    Hidden?<CardDropDown/>:" "
    }
    
</div>    

);

const mapStateToProps=createStructuredSelector({
    currentUser: selectCurrentUser,
    Hidden: selectCartHiddn

})
export default connect(mapStateToProps) (Header);