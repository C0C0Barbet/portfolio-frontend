import React from 'react';
import './contactStyling.css';
import {Button, Card, Row} from "react-bootstrap";

const ContactMe = () => {
    return (
        <form className="contact">
            <Card className="form-contact">
                <Row>
                    <div>
                        <h2 className="form-header">Enter Stuff</h2>
                    </div>
                </Row>
                <Row>
                    <Card.Body className="col-1">Type
                        Something</Card.Body>
                    <input type="text" className="form-control col-6" id="userInput"
                           aria-describedby="youKnowWhatToEnter"/>
                </Row>
                <Row className="col-6">
                    <Card.Body>x2</Card.Body>
                    <input type="text" className="form-control"
                           id="moreUserInput"/>
                </Row>
                <Row>
                    <Button variant="outline-info">What?</Button>
                </Row>
            </Card>
        </form>
    );
};

export default ContactMe;