import React, { useState } from 'react';
import "../css/Navbar.css";
import imagelogo from "../images/ns.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className='navbar'>
            <header>
                <div id="logo">
                    <img className="img" src={imagelogo} alt="Logo" /><span>map's</span>
                </div>
                <span className="menu material-symbols-outlined" onClick={toggleMenu}>
                    {menuActive ? 'close' : 'menu'}
                </span>
                <nav>
                    <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='About'>About</Link></li>
                        <li><Link to='Services'>Services</Link></li>
                        <li><Link to='contact'>Feedback</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
