import React, {useState} from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
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
                        <Image className="d-inline-block navBarImage" fluid roundedCircle src={Me}
                               alt="Yep, that's me!"/>{' '}
                        Colin Burgess
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                               onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-bottom">
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">
                            <h5>About Me</h5>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/blogs">
                            <h5>Blog</h5>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/projects">
                            <h5>Projects</h5>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">
                            <h5>Contact Me</h5>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NewNavBar;