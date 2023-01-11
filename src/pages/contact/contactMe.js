import React from 'react';
import './contactStyling.css';

const ContactMe = (props) => {
    console.log("prevComponent: " + props.prevComponent);

    return (
        <form className="contact-body">
            <div className="container form-contact">
                <div className="row form-header">
                    <h2>
                        Contact Me
                    </h2>
                </div>
                <div className="row form-element">
                    <input type="text" className="form-control form-input" id="formGroupExampleInput"
                           placeholder="Your Name..."/>
                </div>
                <div className="row form-element">
                    <input type="text" className="form-control form-input" id="formGroupExampleInput"
                           placeholder="Your Email..."/>
                </div>
                <div className="row form-element">
                    <textarea className="form-control form-input" rows="4" cols="50"
                              id="formGroupExampleInput"
                              placeholder="Anything Else..."/>
                </div>
                <div className="row button-styling">
                    <button type="button" className="form-button btn btn-secondary btn-lg btn-block"></button>
                </div>
            </div>
        </form>
    )
};

export default ContactMe;