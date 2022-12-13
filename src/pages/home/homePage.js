import React from 'react';
import './homeStyling.css'
import {Col, Container, Row} from "react-bootstrap";

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col md={{span: 4, offset: 4}}>
                    <h1 className="home-landing">Landing Page</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
