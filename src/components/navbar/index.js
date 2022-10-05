import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/' activestyle="true">
                        <h2>Home</h2>
                    </NavLink>
                    <NavLink to='/about' activestyle="true">
                        <h2>About</h2>
                    </NavLink>
                    <NavLink to='/projects' activestyle="true">
                        <h2>Projects</h2>
                    </NavLink>
                    <NavLink to='/contact' activestyle="true">
                        <h2>Contact Me</h2>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;