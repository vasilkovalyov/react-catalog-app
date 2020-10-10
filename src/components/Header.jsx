import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import firebase from '../firebase';

import { useHistory } from 'react-router-dom';


import actions from '../redux/actions'

import Navigation from './Navigation';
import UserLoginIn from './UserLoginIn';

const Header = (props) => {
    const history = useHistory();
    const [isAuth, setIsAuth] = useState(false);
    const isAuthUserId = useSelector(state => state.auth.userUid);
    const AuthUser = useSelector(state => state.auth.user);

    const signOutMethod = (e) => {
        e.preventDefault();
        firebase.auth.signOut()
        .then(() => {
            actions.sing_out_user();
            setIsAuth(false);
            history.push('/sign-in');
        })
    }

    useEffect(() => {
        if(isAuthUserId) {
            setIsAuth(true);
        }
    }, [isAuthUserId, AuthUser])

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
                <span to='/'>Product App</span>
                <nav className="header-navigation">
                    <Navigation navigation={ isAuth ? navIsAuth : navIsNotAuth } />
                    {
                        isAuth ? <Fragment>
                            <span className="delimetr">
                            </span> <UserLoginIn userName={AuthUser.displayName}/>
                        </Fragment> : null
                    }
                </nav>
            </div>
        </header>
    );
};


export default Header;