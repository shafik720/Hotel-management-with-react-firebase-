import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../google.svg';
import auth from '../../firebase.init';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className=" form-div ">
                            <h2>Log In</h2>
                            <hr style={{ marginBottom: "40px" }} />
                            <form action="" >
                                <div className="email-field">
                                    <p>Email :</p>
                                    <input  type="email" name="" id="" />
                                </div>
                                <div className="password-field">
                                    <p>Password :</p>
                                    <input  type="password" name="" id="" />
                                </div>
                                <div className="text-center error-area">
                                    
                                </div>
                                <button>Login</button>
                                <p className="signUpText">Dont Have an Account ? <Link to="/signup">Sign Up Here</Link> </p>
                                <h4>Or</h4>
                                <div draggable className="googleButton">
                                    <img src={googleLogo}  alt="" />
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

export default Login;