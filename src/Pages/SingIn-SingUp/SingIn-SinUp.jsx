import React from 'react';
import './singinSingup.style.scss';
import Singin from '../../Componenets/SingIn/SingIn';
import SignUp from '../../Componenets/Singup/signUp';
const SinginSingup =()=>(
    <div className='SinginSingup'>
        <Singin/>
        <SignUp/>
    </div>
);
export default SinginSingup;