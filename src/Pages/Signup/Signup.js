import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import googleLogo from '../../google.svg';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signup = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [error, setError] = useState('');
    let [repassword, setRepassword] = useState('');
    let navigation = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleRepassword(e) {
        setRepassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be more than 6 character length');
            return;
        }
        if (password !== repassword) {
            setError('Password is not matched ');
            return;
        }
        setError('');
        //---------------------------- sign in with email and password functionality
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    navigation('/');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }
    //------------------ sign in with google functionality
    const provider = new GoogleAuthProvider();
    function handleGoogleSignIn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                if (user) {
                    navigation('/');
                }
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                setError(errorMessage);
            });
    }

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className=" form-div ">
                            <h2 style={{ color: 'red' }}>Sign Up</h2>
                            <hr style={{ marginBottom: "40px" }} />
                            <form action="" onSubmit={handleSubmit} >
                                <div className="email-field">
                                    <p>Email :</p>
                                    <input onBlur={handleEmail} type="email" name="" />
                                </div>
                                <div className="password-field">
                                    <p>Password :</p>
                                    <input onBlur={handlePassword} type="password" name="" />
                                </div>
                                <div className="password-field">
                                    <p>Confirm Password :</p>
                                    <input onBlur={handleRepassword} type="password" name="" />
                                </div>
                                <div className="text-center error-area">
                                    {error ? <p>{error}</p> : ''}
                                </div>
                                <button className="sign-up-button" type='submit'>Sign Up</button>
                                <p className="signUpText">Already Have an Account ? <Link to="/login">Log in Here</Link> </p>
                                <h4>Or</h4>
                                <div onClick={handleGoogleSignIn} draggable className="googleButton">
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