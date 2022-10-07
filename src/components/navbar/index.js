import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './navbarStyling.css';
import {FiMenu, FiX} from "react-icons/fi";
import MeInVogue from "../../baseUtilities/photoOfMe";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <div className="nav-text">
                    Colin Burgess
                    {/*
                    <MeInVogue/>
                    */}
                </div>
            </Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX/> : <FiMenu/>}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-element">
                    <Link to='/about' className="nav-link" onClick={() => setOpen(false)}>
                        <h4>About Me</h4>
                    </Link>
                </li>
                <li className="nav-element">
                    <Link to='/projects' className="nav-link" onClick={() => setOpen(false)}>
                        <h4>Projects</h4>
                    </Link>
                </li>
                <li className="nav-element">
                    <Link to='/contact' className="nav-link" onClick={() => setOpen(false)}>
                        <h4>Contact Me</h4>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;