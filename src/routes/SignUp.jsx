import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
	Button, 
	Input, 
} from '../components/Form'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: null,
        surname: null,
        email: null,
        password: null
    });

    function submitForm(e) {
        e.preventDefault();
        console.log(formData);
    }

    const inputHandle = (type, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [type]: value
        }))
    }

    return (
        <section className="section-login">
            <div className="section-login__inner">
                <div className="container">
                    <div className="section-login__content">
                        <form className="form-auth" onClick={submitForm}>
                            <div className="form-auth__header">
                                <h2>Sign Up</h2>
                                <p>Create a new account for My Product App</p>
                            </div>
                            <Input 
                                type="text" 
                                label="First Name" 
                                placeholder="First Name" 
                                iconName="person-icon"
                                onHandleInput={(value) => inputHandle('name', value)} 
                            />
                            <Input 
                                type="text" 
                                label="Last Name"
                                placeholder="Last Name" 
                                iconName="person-icon"
                                onHandleInput={(value) => inputHandle('surname', value)} 
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
                                <Button additionalClsName="primary" onHangleClick={() => {}}>Register</Button>
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