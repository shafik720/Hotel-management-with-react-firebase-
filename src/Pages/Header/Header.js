import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="header-div">
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/places'>Places</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;