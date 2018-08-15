import React, {Component } from "react";

import ContactForm from "../../components/ContactForm";
import "./Contact.css";

class Contact extends Component{

    render(){
        return(
            <div className="contact">
                <div className="container">
                    <h2>Contact Us</h2>
                    <ContactForm />
                </div>
            </div>
        );
    }
}

export default Contact;