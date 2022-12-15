import React from 'react';
import './contactStyling.css';
import {Button, Card, Col, Row} from "react-bootstrap";

const ContactMe = () => {
    return (
        <div className="contact align-content-center p-sm-5 p-md-5 p-lg-5 p-xl-5">
            <form>
                <Card>
                    <Row>
                        <div>
                            <h2 className="header">Enter Stuff</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} md={3} lg={2} xl={2}><Card.Body>Type
                            Something</Card.Body></Col>
                        <Col xs={12} md={9} lg={10} xl={10}><input type="text" className="form-control" id="userInput"
                                                                   aria-describedby="youKnowWhatToEnter"/></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={10} lg={10} xl={10}><input type="text" className="form-control"
                                                                    id="moreUserInput"/></Col>
                        <Col xs={4} md={2} lg={2} xl={2}><Card.Body>x2</Card.Body></Col>
                    </Row>
                    <Row className="p-sm-3 p-md-3 p-lg-3 p-xl-3">
                        <Button variant="outline-info">What?</Button>
                    </Row>
                </Card>
            </form>
        </div>
    );
};

export default ContactMe;