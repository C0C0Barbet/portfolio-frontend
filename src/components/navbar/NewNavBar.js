import React from 'react';
import {Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import Me from "../../filesToUse/images/me.jpg";
import "./NewNavBarStyling.css";

const NewNavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Row>
                    <Col md={4}>
                        <Navbar.Brand href="/">
                            <div className="navbar-brand ">
                                <Image className="d-inline-block align-bottom navBarImage" fluid roundedCircle src={Me}
                                       alt="Yep, that's me!"/>{' '}
                                Colin Burgess
                            </div>
                        </Navbar.Brand>
                    </Col>
                    <Col md={4} className="transparentNavBar">
                    </Col>
                    <Col md={4}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/about">About Me</Nav.Link>
                                <Nav.Link href="/blogs">Blog</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/contact">contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse></Col>
                </Row>
            </Container>
        </Navbar>
    )
};

export default NewNavBar;