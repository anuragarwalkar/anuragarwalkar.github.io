import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar__heading">
            <h1>Anurag Arwalkar</h1>
            <span>Full Stack Web Developer</span>
        </div>

        <div className="navbar__menu">
            <div className="navbar__menu__nav-link">About</div>
            <div className="navbar__menu__nav-link">Resume</div>
            <div className="navbar__menu__nav-link">Projects</div>
            <div className="navbar__menu__nav-link">Contact</div>
        </div>

        </div>
    )
}

export default Navbar;