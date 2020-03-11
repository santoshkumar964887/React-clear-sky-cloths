import React from 'react';
import './button.style.scss';
const Button=({children, ...otherPorps})=>(
    <button className="button" {...otherPorps}>
    {children}
    </button>
);
export default Button;