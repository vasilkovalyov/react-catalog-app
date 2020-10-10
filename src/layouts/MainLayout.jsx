import React, { Fragment } from 'react';

import Header from '../components/Header'

const MainLayout = (props) => {
    return (
        <Fragment>
            <Header {...props.children.props} />
            {props.children}
        </Fragment>
    );
};


export default MainLayout;