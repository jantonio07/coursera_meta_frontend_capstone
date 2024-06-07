import React, { useState } from 'react';
import logo from '../icons_assets/Logo.svg'

const Nav = () => {
    const [isMenuOpened, setMenuOpened] = useState(false);
    const toggleMenuOpened = () => {
        setMenuOpened(!isMenuOpened);
    };
    return (
        <nav className={`navbar ${isMenuOpened ? 'open' : ''}`}>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <div className='menu-icon' onClick={toggleMenuOpened}>
                <div className='bar'/>
                <div className='bar'/>
                <div className='bar'/>
            </div>
            <ul className={`nav-links ${isMenuOpened ? 'visible' : ''}`}>
                <li>
                    <a href='/'>Home</a>
                    <a href='#menu'>Menu</a>
                    <a href='/booking'>Reservations</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;