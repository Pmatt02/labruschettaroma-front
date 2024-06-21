import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return(
        <div className='box'>
            <div className='logo'>
                <h3>ciao io sono il logo</h3>
            </div>
            <div className='navbar'>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;
