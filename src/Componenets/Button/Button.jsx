import React from 'react';
import './button.style.scss';
const Buttons=({children,IsGoogleSignIn, Inverted, ...otherPorps})=>(
    <button className={`${Inverted ?"Inverted":''} button`} {...otherPorps}>
    {children}
    </button>
);
export default Buttons;