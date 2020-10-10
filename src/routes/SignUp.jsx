import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Loader from '../components/Loader';

import { 
	Button, 
    Input, 
    FormNotification
} from '../components/Form'

import firebase from '../firebase';

const SignUp = () => {
    const [authFormMessage, setAuthFormMessage] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const [formData, setFormData] = useState({
        name: null,
        email: null,
        password: null
    });

    function submitForm(e) {
        e.preventDefault();
        setLoading(true);

        firebase.doCreateUserWithEmailAndPassword(formData.email, formData.password)
        .then(function(result) {
			return result.user.updateProfile({
				displayName: formData.name
			})
        })
        .then(() => {
            setLoading(false);
            history.push('/');
        })
        .catch(e => {
            setAuthFormMessage({
                message: e.message,
                stateCls: 'error'
            });
        });

        timeoutNotification();
    }

    const inputHandle = (type, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [type]: value
        }))
    }

    const timeoutNotification = () => {
        setTimeout(() => {
            setAuthFormMessage(null)
        }, 2000);
    }

    return (
        <section className="section-login">
            <div className="section-login__inner">
                <div className="container">
                    <div className="section-login__content">
                        {
                            authFormMessage !== null ? <FormNotification {...authFormMessage} /> : null
                        }

                        <form className="form-auth">
                            {
                                isLoading ? <Loader /> : null
                            }
                            <div className="form-auth__header">
                                <h2>Sign Up</h2>
                                <p>Create a new account for My Product App</p>
                            </div>
                            <Input 
                                type="text" 
                                label="User name"
                                placeholder="User name" 
                                iconName="person-icon"
                                onHandleInput={(value) => inputHandle('name', value)} 
                            />
                            <Input 
                                type="email" 
                                label="Email"
                                placeholder="Email" 
                                iconName="email-icon"
                                onHandleInput={(value) => inputHandle('email', value)} 
                            />
                            <Input 
                                type="password" 
                                label="Password"
                                placeholder="Password" 
                                iconName="password-icon"
                                onHandleInput={(value) => inputHandle('password', value)} 
                            />
                            <div className="btn-wrap">
                                <Button additionalClsName="primary" onHangleClick={(e) => submitForm(e)}>Register</Button>
                            </div>
                            <div className="form-auth__info-msg">
                                <p><Link to="/sign-in">Back to Login</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="section-login__image" style={{backgroundImage: "url(./images/auth-image.jpg)"}}></div>
                </div>
            </div>
        </section>
    );
};


export default SignUp;