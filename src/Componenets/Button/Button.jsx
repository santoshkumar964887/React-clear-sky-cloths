import React from 'react';
import './button.style.scss';
const Buttons=({children, ...otherPorps})=>(
    <button className="button" {...otherPorps}>
    {children}
    </button>
);
export default Buttons;