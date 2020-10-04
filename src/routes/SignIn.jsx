import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
	Button, 
	Input, 
} from '../components/Form'


const SignIn = () => {
    const [formData, setFormData] = useState({
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
        <section className="section-login" >
            <div className="section-login__inner">
                <div className="container">
                    <div className="section-login__content">
                        <form className="form-auth" onClick={submitForm}>
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
                                <Button additionalClsName="primary" onHangleClick={() => {}}>Login</Button>
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