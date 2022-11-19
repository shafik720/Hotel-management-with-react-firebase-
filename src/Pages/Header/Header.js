import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='header-parent'>
            <div className="header-div container">
                <div className="header-icon">
                    <span> <FontAwesomeIcon icon={faBed}></FontAwesomeIcon> </span>
                    <h1>Hotel Finder</h1>
                </div>
                <nav>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/contact'>Contact Us</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/places'>Places</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/login'>Login</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;