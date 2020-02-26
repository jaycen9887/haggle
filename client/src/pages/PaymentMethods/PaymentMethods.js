import React, { Component } from "react";
import {Button} from "react-materialize";

/* import NewCard from "../../components/NewCreditCardForm"; */
import SavedCards from "../../components/AccountPaymentMethods";

import "./PaymentMethods.css";

class PaymentMethods extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: <SavedCards />
        }
    }

    render(){
        return(
            <div className="container">
            <div>
                <h5>Payment Methods</h5>
                <hr />
                <p><bold>Credit and Debit Cards</bold></p>
                {this.state.current};
                <Button onClick={this.handleClick}>Add new card</Button>
            </div>
        </div>
        );
    }
}

export default PaymentMethods;