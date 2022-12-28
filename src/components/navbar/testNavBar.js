import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import "./NewNavBarStyling.css";
import {useLocation, useNavigate} from "react-router-dom";

const TestNavBar = ({handleChildVariable}) => {

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Navbar expand="sm" className='navBarMain'>
            <Navbar.Brand onClick={() => navigate('/', {state: {component: 'about'}})}>
                My Website
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => {
                        navigate('/', {state: {component: 'about'}});
                        handleChildVariable('about');
                    }}
                              active={location.pathname === '/'}>
                        About Me
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/projects', {state: {component: 'projects'}});
                        handleChildVariable('projects');
                    }}
                              active={location.pathname === '/projects'}>
                        Projects
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/contact', {state: {component: 'contact'}});
                        handleChildVariable('contact');
                    }}
                              active={location.pathname === '/contact'}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TestNavBar;
