import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import "./NewNavBarStyling.css";
import {useLocation, useNavigate} from "react-router-dom";

const TestNavBar = ({handleChildVariable}) => {

    const [expanded, setExpanded] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Navbar expanded={expanded} expand="md" className='navBarMain'>
            <Navbar.Brand onClick={() => {
                navigate('/', {state: {component: 'about'}});
                handleChildVariable('about');
            }}>
                A Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => {
                        navigate('/', {state: {component: 'about'}});
                        handleChildVariable('about');
                        setExpanded(false);
                    }}
                              active={location.pathname === '/'}>
                        <div className="nav-wording">
                            About Me
                        </div>
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/projects', {state: {component: 'projects'}});
                        handleChildVariable('projects');
                        setExpanded(false);
                    }}
                              active={location.pathname === '/projects'}>

                        <div className="nav-wording">
                            Projects
                        </div>
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/contact', {state: {component: 'contact'}});
                        handleChildVariable('contact');
                        setExpanded(false);
                    }}
                              active={location.pathname === '/contact'}>

                        <div className="nav-wording">
                            Contact
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TestNavBar;
