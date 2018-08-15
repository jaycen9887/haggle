import React, { Component} from "react";
import { Modal, Button, Input, Row } from "react-materialize";

import "./AccountModal.css";

class AccountModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            isSignedUp: this.props.isSignedUp,
            trigger: this.props.trigger,

        }
    }

    signUp = () => {
        //sign user up
        //log user in
        //redirect to logged in page

        console.log("User is Signing Up");
    }

    login = () => {
        //check credentials 
        //log user in if correct credentials otherwise throw error
        //redirect to logged in page if correct

        console.log("User is logging in");

    }

    signUpFB = () => {
        //check with FB for correct credentials and key
        //if correct add credentials to db redirect to logged in page else throw error
        console.log("User is Signing Up with Facebook");
    }

    signUpGM = () => {
        //check with GM for correct credentials and key
        //if correct add credentials to db redirect to logged in page else throw error
        console.log("User is Signing Up with Google");
    }

    loginFB = () => {
        //check with FB for correct credentials and key
        //if correct add credentials to db redirect to logged in page else throw error
        console.log("User is Logging in with Facebook");
    }

    loginGM = () => {
        //check with GM for correct credentials and key
        //if correct add credentials to db redirect to logged in page else throw error
        console.log("User is Logging in with Google");
    }

    checkLogin = () => {
        //if this.state.isSignedUp === true then login() else signup()
        if(this.state.isSignedUp === true){
            this.login();
        }else {
            this.signUp();
        }
    }

    checkFB = () => {
        //if this.state.isFB === true then loginFB() else signUpFB()
        if(this.state.isSignedUp === true){
            this.loginFB();
        }else {
            this.signUpFB();
        }
    }

    checkGM = () => {
        //if this.state.isGM === true then loginGM() else signUpGM()
        if(this.state.isSignedUp === true){
            this.loginGM();
        }else {
            this.signUpGM();
        }
    }

    render(){
        return(
            <div className={this.props.class}>
                <Modal trigger={<Button>{this.state.trigger}</Button>}>
                    <div>
                        <Row><Button onClick={this.checkFB}>Continue with Facebook</Button></Row>
                        <Row><Button onClick={this.checkGM}>Continue with Google</Button></Row>
                        <p>or continue</p>
                        <Row>
                            <Input s={12} placeholder="Email Address"/>
                        </Row>
                        <Row>
                            <Input s={12} placeholder="Password"/>
                        </Row>
                        <Button onClick={this.checkLogin}>Sign in</Button>
                    </div>
                    <div className="m-footer">
                        <p>{this.props.text} <a href={this.props.linkAddress}>{this.props.linkText}</a></p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AccountModal;