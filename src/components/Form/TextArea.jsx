import React from 'react';

const TextArea = (props) => {
    const {placeholder, id, label, value, onHandleInput } = props;

    return (
        <div className="input-component">
            <label htmlFor={id} className="input-component__label">
                <span className="input-component__label">{label}</span>
            </label>
            <div className="input-field">
                <textarea 
                    id={id} 
                    placeholder={placeholder} 
                    defaultValue={value}
                    onBlur={(e) => onHandleInput(e.target.value)}
                />
            </div>
        </div>
    );
};

export default TextArea;