import React from "react";
import {Nav} from "react-bootstrap";
import HomePage from "../../pages/home/homePage";
import AboutMe from "../../pages/about/aboutMe";
import NewNavBar from "./NewNavBar";

const NewRoutingInfo = (props) => {

    return (
        <Nav className={!props.initialized ? 'routing-info' : 'routing-info.active '}
             activeKey="/home"
             onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <div>
                <NewNavBar/>
            </div>
            <Nav.Item>
                <Nav.Link path='/' exact element={<HomePage/>}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link element={<AboutMe/>} eventKey="about">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="blogs">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="projects">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="contact">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="login4me" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NewRoutingInfo;