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
                <Row className="col-8">
                    <div className="form-label">Type
                        Something
                    </div>
                    <input type="text" className="form-control" id="userInput"
                           aria-describedby="youKnowWhatToEnter"/>
                </Row>
                <Row className="col-8">
                    <div className="form-label">x2</div>
                    <input type="text" className="form-control"
                           id="moreUserInput"/>
                </Row>
                <Row>
                    <Button variant="info">What?</Button>
                </Row>
            </Card>
        </form>
    );
};

export default ContactMe;