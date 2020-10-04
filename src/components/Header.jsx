import React from 'react';
import Navigation from './Navigation';


const Header = () => {
    const isAuth = true;

    const navIsNotAuth  = [
        {
            name: 'Sign up',
            link: '/sign-up'
        },
        {
            name: 'Sign in',
            link: '/sign-in'
        }
    ]

    const navIsAuth= [
        {
            name: 'Products',
            link: '/'
        },
        {
            name: 'Create Product',
            link: '/create'
        },
        {
            name: 'Sign out',
            link: '/sign-in'
        },
    ]
    return (
        <header className="header">
            <div className="container">
                <span to='/'>Product App</span>
                <Navigation navigation={ isAuth ? navIsAuth : navIsNotAuth } />
            </div>
        </header>
    );
};


export default Header;