import React from 'react';
import './formInput.style.scss';
const FormInput=({handelChange,label, ...otherProps})=>{
    return(
        <div className="group">
            <input type="text" className="input" onChange={handelChange} {...otherProps}/>
            {
                label ?( <label
                className={`${otherProps.value.length?'shrink':""}form-input-label`}>{label}</label>
                ):null
            }
        </div>

    );
}
export default FormInput;