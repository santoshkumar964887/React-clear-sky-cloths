import React from 'react';
import './button.style.scss';
const Buttons=({children,IsGoogleSignIn, ...otherPorps})=>(
    <button className={`${IsGoogleSignIn?"GoogleSignIn":''} button`} {...otherPorps}>
    {children}
    </button>
);
export default Buttons;