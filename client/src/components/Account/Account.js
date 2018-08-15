import React, { Component } from "react";
import { Modal, Button, Row} from "react-materialize";
import FontAwesome from "react-fontawesome";

import AccountModal from "../AccountModal";

import "./Account.css";

class Account extends Component{

    render(){
        return(
            <div className="Account-Modal">
                <Modal className="modal-account" trigger={<Button>Account</Button>}>
                    <Row>
                        <AccountModal
                            class="signup-Modal" 
                            isSignedUp={false}
                            trigger="Sign Up"
                            text="Already have an account?"
                            linkAddress="/signin"
                            linkText="Sign in"
                        />
                    </Row>
                    <Row>
                        <AccountModal
                            class="signin-Modal" 
                            isSignedUp={true}
                            trigger="Sign in"
                            text="Don't have an account?"
                            linkAddress="/signup"
                            linkText="Login"
                        />
                    </Row>
                    <a href='/price-alerts'><FontAwesome name="exclamation" />Price Alerts</a>
                </Modal>
            </div>
        );
    }
}

export default Account;