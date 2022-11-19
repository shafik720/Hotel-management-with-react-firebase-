import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';


const Header = () => {


    function showMenu() {        
        let parentMenu = document.getElementById('header-icon-right');
        parentMenu.classList.add('enable');        
    }

    function hideMenu(){
        let parentMenu = document.getElementById('header-icon-right');
        parentMenu.classList.remove('enable');  
    }

    return (
        <div className='header-parent'>
            <div className="header-div container">
                <div className="header-icon">
                    <div className="header-icon-left">
                        <span> <FontAwesomeIcon icon={faBed}></FontAwesomeIcon> </span>
                        <h1>Hotel Finder</h1>
                    </div>
                    <div className="header-icon-right" id='header-icon-right'>
                        <div onClick={showMenu} className='menu-icon-one'> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </div>
                        <div onClick={hideMenu} className='menu-icon-two hidden'> <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon> </div>
                    </div>
                </div>
                <div className="header-menu">
                    <nav>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/about'>About</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/contact'>Contact Us</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/places'>Places</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/login'>Login</NavLink>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;