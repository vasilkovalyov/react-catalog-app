import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UserLoginIn from './UserLoginIn';


const Navigation = (props) => {
    const { navigation }= props;
    return (
        <nav className="header-navigation">
            <ul className="header-navigation__list">
                {
                    navigation.map((item, key) => {
                        return <li key={key}>
                            <Link to={item.link} >{item.name}</Link>
                        </li>
                    })
                }
            </ul>
            <span className="delimetr"></span>
            <UserLoginIn userName="Vasiliy" />
        </nav>
    );
};

Navigation.propTypes = {
    navigation: PropTypes.array
};

export default Navigation;