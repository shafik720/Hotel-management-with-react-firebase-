import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Header = () => {


    function showMenu() {
        let parentMenu = document.getElementById('header-icon-right');
        let headerMenu = document.querySelector('.header-menu');
        let headerMenuParent = document.querySelector('.header-menu-parent');

        parentMenu.classList.add('enable');
        headerMenu.classList.add('active');
        headerMenuParent.classList.add('active');

    }

    function hideMenu() {
        let parentMenu = document.getElementById('header-icon-right');
        let headerMenu = document.querySelector('.header-menu');
        let headerMenuParent = document.querySelector('.header-menu-parent');

        parentMenu.classList.remove('enable');
        headerMenu.classList.remove('active');
        headerMenuParent.classList.remove('active');
    }

    function parentClick(e) {
        let parentMenu = document.getElementById('header-icon-right');
        let headerMenu = document.querySelector('.header-menu');
        let headerMenuParent = document.querySelector('.header-menu-parent');
        if (e.target.className === 'header-menu-parent active' || e.target.className === 'inactive') {
            parentMenu.classList.remove('enable');
            headerMenu.classList.remove('active');
            headerMenuParent.classList.remove('active');
        }
    }

    // --------------- implementing Log Out options
    const [signOut] = useSignOut(auth);    
    const [user, loading, error] = useAuthState(auth);
    function handleLogout(){
        signOut();
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
                        <div draggable onClick={showMenu} className='menu-icon-one'> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </div>
                        <div draggable onClick={hideMenu} className='menu-icon-two hidden'> <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon> </div>
                    </div>
                </div>
                <div onClick={parentClick} className="header-menu-parent">
                    <div className="header-menu">
                        <nav>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/about'>About</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/contact'>Contact Us</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/cities'>Cities</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/bookings'>Your Bookings</NavLink>
                            {user ? <a onClick={handleLogout} href="">Log Out</a> : <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/login'>Login</NavLink>}
                            
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;