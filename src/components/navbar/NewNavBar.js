import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import Me from "../../filesToUse/images/me.jpg";
import "./NewNavBarStyling.css";
import {Link} from "react-router-dom";

const NewNavBar = () => {

    return (
        <Navbar fixed="top" className="navBarMain" collapseOnSelect expand="xl lg md" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Container>
                        <Image className="d-inline-block navBarImage" fluid roundedCircle src={Me}
                               alt="Yep, that's me!"/>{' '}
                        Colin Burgess
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-bottom">
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NewNavBar;