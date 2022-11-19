import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className=''>
            <div className="header-div">
                <div className="header-icon">
                    <span> <FontAwesomeIcon icon={faBed}></FontAwesomeIcon> </span>
                    <h1>Hotel Finder</h1>
                </div>
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