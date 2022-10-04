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
                        Home
                    </NavLink>
                    <NavLink to='/about' activestyle="true">
                        About
                    </NavLink>
                    <NavLink to='/projects' activestyle="true">
                        Projects
                    </NavLink>
                    <NavLink to='/contact' activestyle="true">
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;