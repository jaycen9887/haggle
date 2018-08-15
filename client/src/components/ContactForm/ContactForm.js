import React, { Component } from "react";
import {Input, Row, Button} from "react-materialize";

import "./ContactForm.css";

class ContactForm extends Component{

    render(){
        return(
            <div className="contact-form">
                <div className="containter">
                    <Row>
                        <Input placeholder="First Name" s={6} />
                        <Input placeholder="Last Name" s={6} />
                    </Row>
                    <Row>
                        <Input placeholder="Email Address" s={12} />
                    </Row>
                    <Row>
                        <Input type="select" s={12} defaultValue="Topic">
                            <option value="Topic" disabled>Topic</option>
                            <option value="HelpDesk">Report Issue / Submit Help Desk Ticket</option>
                            <option value="Advertise">Advertise</option>
                            <option value="Support">Support Us</option>
                            <option value="JustCause">Just Because</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input type="textarea" s={12} placeholder="Message"/>
                    </Row>
                    <Row>
                        <Button>Submit</Button>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ContactForm;
