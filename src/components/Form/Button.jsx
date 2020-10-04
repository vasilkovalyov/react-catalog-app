import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({additionalClsName, children, onHangleClick}) => {
    return (
        <button 
            className={
                classNames('button', 'button__'+additionalClsName)
            }
            onClick={onHangleClick}
        > { children } </button>
    );
};

Button.propTypes = {
    additionalClsName: PropTypes.string
};

export default Button;