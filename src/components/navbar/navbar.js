import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './navbarStyling.css';
import {FiMenu, FiX} from "react-icons/fi";
import Me from "../../filesToUse/images/me.jpg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <ul className="nav-header">
                    <li>
                        <img src={Me} alt="Yep, that's me!" className="nav-logo"/>
                    </li>
                    <li className="nav-text">
                        Colin Burgess
                    </li>
                </ul>
            </Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX/> : <FiMenu/>}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li>
                    <Link to='/about' className="nav-link" onClick={() => setOpen(false)}>
                        <h4>About Me</h4>
                    </Link>
                </li>
                <li>
                    <Link to='/blogs' className="nav-link" onClick={() => setOpen(false)}>
                        <h4>Blogs</h4>
                    </Link>
                </li>
                <li>
                    <Link to='/projects' className="nav-link" onClick={() => setOpen(false)}>
                        <h4>Projects</h4>
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className="nav-link" onClick={() => setOpen(false)}>
                        <h4>Contact Me</h4>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;