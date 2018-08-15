import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import {Input, Button, Row, Col} from "react-materialize";

import "./NewCreditCardForm.css";

class NewCreditCardForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            preferred: false
        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Input s={6} placeholder="Name on Card"/>
                    <Input s={6} placeholder="Credit Card Number"/>
                </Row>
                <Row>
                    <Input s={3} type="datepicker"/>
                    <Input s={3} type="" />
                    <Col s={6}>
                        <span><FontAwesome name="cc-visa" /></span>
                        <span><FontAwesome name="cc-mastercard" /></span>
                        <span><FontAwesome name="cc-amex" /></span>
                        <span><FontAwesome name="cc-discover" /></span>
                        <span><FontAwesome name="cc-diners-club" /></span>
                        <span><FontAwesome name="cc-jcb" /></span>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <h6>Billing Address</h6>
                    <Row>
                        <Input s={6} placeholder=""/>
                        <Input s={6} placeholder=""/>
                    </Row>
                    <Row>
                        <Input s={6} placeholder=""/>
                        <Input s={3} placeholder=""/>
                        <Input s={3} placeholder=""/>
                    </Row>
                    <Row>
                        <Input s={6} placeholder=""/>
                    </Row>
                    <Row>
                        <Input s={6} type="checkbox" value="preferred" label="Set as preferred"/>
                    </Row>
                </Row>
                <Button> Add card </Button>
            </div>
        );
    }
}

export default NewCreditCardForm;
