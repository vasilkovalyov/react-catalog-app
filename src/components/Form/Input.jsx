import React from 'react';

const Input = (props) => {
    const {type, placeholder, id, label, iconName, value, onHandleInput } = props;

    return (
        <div className="input-component">
            <label htmlFor={id} className="input-component__label">
                <span className="input-component__label">{label}</span>
            </label>
            <div className="input-field">
                {
                    iconName ? <div className="input-field__logo">
                        <img src={window.location.origin+`/images/${iconName}.svg`} alt="icon"/>
                    </div> : null
                }
                <input 
                    id={id} 
                    type={type}
                    placeholder={placeholder} 
                    defaultValue={value}
                    onBlur={(e) => onHandleInput(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Input;