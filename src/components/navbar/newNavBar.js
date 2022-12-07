import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import Me from "../../filesToUse/images/me.jpg";

const NewNavBar = () => {

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <div className="navbar-brand ">
                        <Image fluid roundedCircle src={Me} alt="Yep, that's me!"/>
                        Colin Burgess
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/blogs">Blog</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NewNavBar;