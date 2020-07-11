import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar__heading">
            <h1>Anurag Arwalkar</h1>
            <span>Full Stack Web Developer</span>
        </div>

        <div className="navbar__menu">
            <Link to="/" className="navbar__menu__nav-link">Home</Link>
            <Link to="/projects" className="navbar__menu__nav-link">Projects</Link>
            <Link to="/contact" className="navbar__menu__nav-link">Contact</Link>
            <Link to="/about" className="navbar__menu__nav-link">About</Link>
        </div>

        </div>
    )
}

export default Navbar;