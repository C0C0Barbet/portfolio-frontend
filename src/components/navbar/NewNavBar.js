import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Me from "../../filesToUse/images/me.jpg";
import "./NewNavBarStyling.css";
import {Link} from "react-router-dom";

const NewNavBar = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} className="navBarMain" collapseOnSelect expand="xl lg md" variant="dark">
            <Container>
                <Navbar.Brand onClick={() => setExpanded(false)} as={Link} to="/">
                    <Container>
                        <img className="navBarImage nav-wording" src={Me}
                             alt="Yep, that's me!"/>{' '}
                        Colin Burgess
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                               onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-bottom">
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">
                            <div className="nav-wording">About Me</div>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/blogs">
                            <div className="nav-wording">Blog</div>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/projects">
                            <div className="nav-wording">Projects</div>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">
                            <div className="nav-wording">Contact Me</div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NewNavBar;