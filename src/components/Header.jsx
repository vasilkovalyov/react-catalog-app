import React from 'react';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';

import firebase from '../firebase';
import actions from '../redux/actions'
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    const isAuthUser = useSelector(state => state.auth.userUid);

    const signOutMethod = (e) => {
        firebase.auth.signOut()
        .then(() => {
            actions.sing_out_user();
            setIsAuth(false);
        })
    }

    useEffect(() => {
        if(isAuthUser) {
            setIsAuth(true);
        }
    }, [isAuthUser])

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
            link: '/sign-in',
            method: signOutMethod
        },
    ]

    
    return (
        <header className="header">
            <div className="container">
                {console.log(isAuth)}
                <span to='/'>Product App</span>
                <Navigation navigation={ isAuth ? navIsAuth : navIsNotAuth } />
            </div>
        </header>
    );
};


export default Header;