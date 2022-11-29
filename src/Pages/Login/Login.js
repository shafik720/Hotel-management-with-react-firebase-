import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../google.svg';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Form, Spinner } from 'react-bootstrap';

const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errors, setErrors] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }


    // --------- authentication using firebase hooks -------------------------
    const navigate = useNavigate();

    // const [user] = useAuthState(auth);
    const [signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    //----------------------------- working on protected route 
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    function handleGoogleSignIn() {
        signInWithGoogle();
        if (user) {
            navigate(from, { replace: true });
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }

    // working on checkbox 
    const[agree, setAgree] = useState(false);
    

    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className=" form-div ">
                            <h2>Log In</h2>
                            <hr style={{ marginBottom: "40px" }} />

                            <form action="" onSubmit={handleSubmit}>
                                <div className="email-field">
                                    <p>Email :</p>
                                    <input onBlur={handleEmail} type="email" name="" />
                                </div>
                                <div className="password-field">
                                    <p>Password :</p>
                                    <input onBlur={handlePassword} type="password" name="" />
                                </div>
                                <div className="text-center error-area">
                                    <p>{loading ?
                                        <Spinner animation="border" variant="primary" />
                                        :
                                        ''
                                    }</p>
                                    <p>{error ? error.message : ''}</p>
                                    <div className="checkboxDiv">
                                        <input onClick={()=>setAgree(!agree)} className='checkbox' type="checkbox" name="checkbox" id="" />
                                        <label className={agree ? 'active' : 'notActive'} htmlFor="checkbox">Accept Terms and Conditions</label>
                                    </div>
                                </div>
                                <button className={agree || 'greyButton'} disabled={agree ? false : true}>Login</button>
                                <p className="signUpText">Dont Have an Account ? <Link to="/signup">Sign Up Here</Link> </p>
                                {/* <h4>Or</h4>
                                <div onClick={handleGoogleSignIn} draggable className="googleButton">
                                    <img src={googleLogo} alt="" />
                                    <h4>Sign in Using Google</h4>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;