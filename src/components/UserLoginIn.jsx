import React from 'react';
import PropTypes from 'prop-types';

const UserLoginIn = (props) => {
    const { userName } = props;
    return (
        <div className="user-login-in">
            <div className="user-login-in__image">
                <img src="./images/user.svg" alt="user icon"/>
            </div>
            <span className="user-login-in__name">{userName}</span>
        </div>
    );
};

UserLoginIn.propTypes = {
    userName: PropTypes.string
};

export default UserLoginIn;