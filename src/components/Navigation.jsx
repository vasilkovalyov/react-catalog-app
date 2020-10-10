import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




const Navigation = (props) => {
    const { navigation }= props;
    return (
        <ul className="header-navigation__list">
            {
                navigation.map((item, key) => {
                    return <li key={key}>
                        <Link to={item.link} onClick={item.method ? item.method : null} >{item.name}</Link>
                    </li>
                })
            }
        </ul>
    );
};

Navigation.propTypes = {
    navigation: PropTypes.array
};

export default Navigation;