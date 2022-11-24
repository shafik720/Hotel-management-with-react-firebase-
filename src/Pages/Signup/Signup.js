import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import googleLogo from '../../google.svg';

const Signup = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [repassword, setRepassword] = useState('');

    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className=" form-div ">
                            <h2 style={{ color: 'red' }}>Sign Up</h2>
                            <hr style={{ marginBottom: "40px" }} />
                            <form action="" >
                                <div  className="email-field">
                                    <p>Email :</p>
                                    <input onBlur={handleEmail} type="email" name="" id="" />
                                </div>
                                <div  className="password-field">
                                    <p>Password :</p>
                                    <input type="password" name="" id="" />
                                </div>
                                <div  className="password-field">
                                    <p>Confirm Password :</p>
                                    <input type="password" name="" id="" />
                                </div>
                                <div className="text-center error-area">
                                    
                                </div>
                                <button onClick={handleSubmit} className="sign-up-button" type='submit'>Sign Up</button>
                                <p className="signUpText">Already Have an Account ? <Link to="/login">Log in Here</Link> </p>
                                <h4>Or</h4>
                                <div draggable className="googleButton">
                                    <img src={googleLogo} alt="" />
                                    <h4>Sign in Using Google</h4>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;