import React from 'react';
import {Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import Me from "../../filesToUse/images/me.jpg";
import "./NewNavBarStyling.css";
import {Link} from "react-router-dom";

const NewNavBar = () => {

    return (
        <Navbar fixed="top" className="navBarMain" collapseOnSelect expand="xl lg md" variant="dark">
            <Container>
                <Row className='navBarElements'>
                    <Col md={4} sm xs={3}>
                        <Navbar.Brand as={Link} to="/">
                            <div className="navbar-brand ">
                                <Image className="d-inline-block navBarImage" fluid roundedCircle src={Me}
                                       alt="Yep, that's me!"/>{' '}
                                Colin Burgess
                            </div>
                        </Navbar.Brand>
                    </Col>
                    <Col md={{span: 4, offset: 4}} sm xs={{span: 2, offset: 5}}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto align-bottom">
                                <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                                <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse></Col>
                </Row>
            </Container>
        </Navbar>
    )
};

export default NewNavBar;