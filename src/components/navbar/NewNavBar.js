import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import "./NewNavBarStyling.css";
import {Link} from "react-router-dom";

const NewNavBar = ({location, prevPath}) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} className="navBarMain" collapseOnSelect expand="xl lg md sm" variant="dark">
            <Container fluid>
                <Navbar.Brand onClick={() => setExpanded(false)} as={Link} to="/">
                    <div className="nav-header">
                        Colin Burgess
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">
                            <div className="nav-wording">
                                About Me
                            </div>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/projects">
                            <div className="nav-wording">
                                Projects
                            </div>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">
                            <div className="nav-wording">
                                Contact
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NewNavBar;