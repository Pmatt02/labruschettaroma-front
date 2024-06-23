import React from 'react';
import MobileNavbar from '../Navbar/MobileNavbar';
import './Header.css'

const Header = () => {
    return(
        <div id='box'>
            <div id='logo'>
                <h3>ciao io sono il logo</h3>
            </div>
            <div id='navbar'>
                <MobileNavbar />
            </div>
        </div>
    );
}

export default Header;
