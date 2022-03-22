import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/About_us">About US</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;