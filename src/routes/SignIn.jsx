import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';

import Loader from '../components/Loader';

import { 
	Button, 
    Input, 
    FormNotification
} from '../components/Form'

import firebase from '../firebase';

const SignIn = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [authFormMessage, setAuthFormMessage] = useState(null);
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: null,
        password: null
    });

    function submitForm(e) {
        e.preventDefault();
        setLoading(true);

        firebase.doSignInUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
            setLoading(false);
        })
        .then(() => {
            history.push("/");
        })
        .catch(e => {
            setAuthFormMessage({
                message: e.message,
                stateCls: 'error'
            });
        })
        
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
            setLoading(false);
        }, 2000);
    }

    return (
        <section className="section-login" >
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
                                <h2>Sign in</h2>
                                <p>Please login to access the Dashboard</p>
                            </div>
                            <Input 
                                type="text" 
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
                                <Button additionalClsName="primary" onHangleClick={(e) => {submitForm(e)}}>Login</Button>
                            </div>
                            <div className="form-auth__info-msg">
                                <p>New to our platform? <Link to="/sign-up">Create an account</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="section-login__image" style={{backgroundImage: "url(./images/auth-image.jpg)"}}></div>
                </div>
            </div>
        </section>
    );
};


export default SignIn;