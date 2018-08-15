import React, { Component } from "react";
import {Row, Col, Modal, Input, Button} from "react-materialize";

import "./PriceAlerts.css";

class PriceAlerts extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "eathrome@yahoo.com",
            reminders: true,
            recommend: true,
            surveys: false,
            offers: false,
            announcements: false,
            reminderEmails: {
                electronics: false,
                clothes: false,
                toys: false,
                videoGames: false,
                grocery: false,
                home: false,
                kitchen: false
            },
            recommendEmails: {
                electronics: false,
                clothes: false,
                toys: false,
                videoGames: false,
                grocery: false,
                home: false,
                kitchen: false
            }
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        //console.log(e.target);
        if(value === "remind"){
            //console.log(value);
            if(this.state.reminders === true){
                this.setState({reminders: false});
            }else {
                this.setState({reminders: true});
            }
        }
        if(value === "recommend"){
            //console.log(value);
            if(this.state.recommend === true){
                this.setState({recommend: false});
            }else {
                this.setState({recommend: true});
            }
        }
        if(value === "surveys"){
            //console.log(value);
            if(this.state.surveys === true){
                this.setState({surveys: false});
            }else {
                this.setState({surveys: true});
            }
        }

        if(value === "offers"){
            //console.log(value);
            if(this.state.offers === true){
                this.setState({offers: false});
            }else {
                this.setState({offers: true});
            }
        }

        if(value === "annoucements"){
            //console.log(value);
            if(this.state.announcements === true){
                this.setState({announcements: false});
            }else {
                this.setState({announcements: true});
            }
        }

        if(value === "recommend-Electronics"){
            let recommendEmails = this.state.recommendEmails;
            if(recommendEmails.electronics === false){
                recommendEmails.electronics = true;
            }else {
                recommendEmails.electronics = false;
            }
            this.setState({recommendEmails: recommendEmails });
            //console.log(this.state.recommendEmails);
        }
        if(value === "recommend-Clothes"){
            let recommendEmails = this.state.recommendEmails;
            
            if(recommendEmails.clothes === false){
                recommendEmails.clothes = true;
            }else {
                recommendEmails.clothes = false;
            }
            this.setState({recommendEmails: recommendEmails });
            //console.log(this.state.recommendEmails);
        }
        if(value === "recommend-Toys"){
            let recommendEmails = this.state.recommendEmails;
            
            if(recommendEmails.toys === false){
                recommendEmails.toys = true;
            }else {
                recommendEmails.toys = false;
            }
            this.setState({recommendEmails: recommendEmails });
            //console.log(this.state.recommendEmails);
        }
        if(value === "recommend-Video-Games"){
            let recommendEmails = this.state.recommendEmails;
            
            if(recommendEmails.videoGames === false){
                recommendEmails.videoGames = true;
            }else {
                recommendEmails.videoGames = false;
            }
            this.setState({recommendEmails: recommendEmails });
            //console.log(this.state.recommendEmails);
        }
        if(value === "recommend-Grocery"){
            let recommendEmails = this.state.recommendEmails;
            
            if(recommendEmails.grocery === false){
                recommendEmails.grocery = true;
            }else {
                recommendEmails.grocery = false;
            }
            this.setState({recommendEmails: recommendEmails });
            //console.log(this.state.recommendEmails);
        }
        if(value === "recommend-Home"){
            let recommendEmails = this.state.recommendEmails;
            
            if(recommendEmails.home === false){
                recommendEmails.home = true;
            }else {
                recommendEmails.home = true;false;
            }
            this.setState({recommendEmails: recommendEmails });
            //console.log(this.state.recommendEmails);
        }
        if(value === "recommend-Kitchen"){
            let recommendEmails = this.state.recommendEmails;
            
            if(recommendEmails.kitchen === false){
                recommendEmails.kitchen = true;
            }else {
                recommendEmails.kitchen = false;
            }
            this.setState({recommendEmails: recommendEmails });
            //console.log(this.state.recommendEmails);
        }

        if(value === "reminders-Electronics"){
            let reminderEmails = this.state.reminderEmails;
            if(reminderEmails.electronics === false){
                reminderEmails.electronics = true;
            }else {
                reminderEmails.electronics = false;
            }
            this.setState({reminderEmails: reminderEmails });
            //console.log(this.state.reminderEmails);
        }
        if(value === "reminders-Clothes"){
            let reminderEmails = this.state.reminderEmails;
            
            if(reminderEmails.clothes === false){
                reminderEmails.clothes = true;
            }else {
                reminderEmails.clothes = false;
            }
            this.setState({reminderEmails: reminderEmails });
            //console.log(this.state.reminderEmails);
        }
        if(value === "reminders-Toys"){
            let reminderEmails = this.state.reminderEmails;
            
            if(reminderEmails.toys === false){
                reminderEmails.toys = true;
            }else {
                reminderEmails.toys = false;
            }
            this.setState({reminderEmails: reminderEmails });
            //console.log(this.state.reminderEmails);
        }
        if(value === "reminders-Video-Games"){
            let reminderEmails = this.state.reminderEmails;
            
            if(reminderEmails.videoGames === false){
                reminderEmails.videoGames = true;
            }else {
                reminderEmails.videoGames = false;
            }
            this.setState({reminderEmails: reminderEmails });
            //console.log(this.state.reminderEmails);
        }
        if(value === "reminders-Grocery"){
            let reminderEmails = this.state.reminderEmails;
            
            if(reminderEmails.grocery === false){
                reminderEmails.grocery = true;
            }else {
                reminderEmails.grocery = false;
            }
            this.setState({reminderEmails: reminderEmails });
            //console.log(this.state.reminderEmails);
        }
        if(value === "reminders-Home"){
            let reminderEmails = this.state.reminderEmails;
            
            if(reminderEmails.home === false){
                reminderEmails.home = true;
            }else {
                reminderEmails.home = true;false;
            }
            this.setState({reminderEmails: reminderEmails });
            //console.log(this.state.reminderEmails);
        }
        if(value === "reminders-Kitchen"){
            let reminderEmails = this.state.reminderEmails;
            
            if(reminderEmails.kitchen === false){
                reminderEmails.kitchen = true;
            }else {
                reminderEmails.kitchen = false;
            }
            this.setState({reminderEmails: reminderEmails });
            //console.log(this.state.reminderEmails);
        }
        
    }
    render(){
        return(
            <div className="container account">
                <Row>
                    <Col s={2} className="account-links">
                        <Row><a href="/account">Preferences</a> </Row>
                        <Row><a className="activeLink" href="/alerts">Email & Alerts</a> </Row>
                        <Row><a href="/payment-methods">Payment Methods</a> </Row>
                        <Row><a href="/history">History</a> </Row>
                    </Col>
                    <Col s={10}>
                        <h5>Price Alerts</h5>
                        <span className="modal-trigger">
                            <Modal trigger={<a>Add a price alert</a>}>
                                <Row>
                                    <Input maxHeight={20} className="select-categories" onChange={this.handleCategoryChange} s={6} type="select" defaultValue="Categories">
                                        <option value="Categories" disabled>Categories</option>
                                        <option value="All">All</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Clothes">Clothes</option>
                                        <option value="Toys">Toys</option>
                                        <option value="Video_Games">Video Games</option>
                                        <option value="Grocery">Grocery</option>
                                        <option value="Home">Home</option>
                                        <option value="Kitchen">Kitchen</option>
                                    </Input>
                                    <Input onChange={this.handleItemChange} placeholder="Item" s={6}/>
                                </Row>
                                <Row>
                                    <Input onChange={this.handlePriceLowChange} placeholder="Price Low" s={6}/>
                                    <Input onChange={this.handlePriceHighChange} ref="priceHigh" placeholder="Price High" s={6}/>
                                </Row>
                                <Row>
                                    <Input className="select-days" s={6} label="Send Every" type="select" defaultValue="Friday" multiple>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                    </Input>
                                    <div className="price-checkbox"><Input s={6} type="checkbox" value="modile" label="Mobile Notification"/></div>
                                </Row>    
                                <Button onClick={this.submit}>Submit</Button>
                            </Modal>
                        </span>
                        <div className="clear"></div>
                        <div className="users-price-alerts">
                            <p>No alerts have been created</p>
                        </div>
                        <div className="subscripts">
                            <h5>Subscriptions</h5>
                            <div className="clear"></div>
                            <hr />
                            <p>Select subscriptions to be delivered to {this.state.email}</p>
                            <hr />
                            <div id="announce">
                                <h6>Annoucements</h6>
                                <Input onChange={this.handleChange} type="checkbox" value="annoucements" label="Be the first to know about new featues and other HAGGLE news (sent quarterly)" />
                            </div>
                            <div className="clear"></div>
                            <hr />
                            <div id="special-offers">
                                <h6>Special Offers</h6>
                                <Input onChange={this.handleChange} type="checkbox" value="offers" label="Receive last-minute offers from our partners (sent periodically)" />
                            </div>
                            <div className="clear"></div>
                            <hr />
                            <div id="review-survey">
                                <h6>Review Surveys</h6>
                                <Input onChange={this.handleChange} type="checkbox" value="surveys" label="Share your product experiances to better inform HAGGLE users" />
                            </div>
                            <div className="clear"></div>
                            <hr />
                            <div id="personal-recommend">
                                <h6>Personalized Recommendations</h6>
                                <Input type="checkbox" onChange={this.handleChange} value="recommend" label="Customized shopping deals tailored to help you save as much money when you buy through HAGGLE (sent periodically)" />
                                <div className="recommend-checkboxes">
                                    <Input onChange={this.handleChange} name="recommend-checkboxes" type="checkbox" value="recommend-Electronics" label="Electronics" disabled={this.state.recommend}/>
                                    <Input onChange={this.handleChange} name="recommend-checkboxes" type="checkbox" value="recommend-Clothes" label="Clothes" disabled={this.state.recommend}/>
                                    <Input onChange={this.handleChange} name="recommend-checkboxes" type="checkbox" value="recommend-Toys" label="Toys" disabled={this.state.recommend}/>
                                    <Input onChange={this.handleChange} name="recommend-checkboxes" type="checkbox" value="recommend-Video-Games" label="Video Games" disabled={this.state.recommend}/>
                                    <Input onChange={this.handleChange} name="recommend-checkboxes" type="checkbox" value="recommend-Grocery" label="Grocery" disabled={this.state.recommend}/>
                                    <Input onChange={this.handleChange} name="recommend-checkboxes" type="checkbox" value="recommend-Home" label="Home" disabled={this.state.recommend}/>
                                    <Input onChange={this.handleChange} name="recommend-checkboxes" type="checkbox" value="recommend-Kitchen" label="Kitchen" disabled={this.state.recommend}/>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <hr />
                            <div id="reminders">
                                <h6>Reminders</h6>
                                <Input type="checkbox" onChange={this.handleChange} value="remind" label="See the latest prices for the deals you were searching(sent periodically)" />
                                <div className="clear"></div>
                                <div className="reminders-checkboxes">
                                    <Input onChange={this.handleChange} name="remind-checkboxes" type="checkbox" value="reminders-Electronics" label="Electronics" disabled={this.state.reminders}/>
                                    <Input onChange={this.handleChange} name="remind-checkboxes" type="checkbox" value="reminders-Clothes" label="Clothes" disabled={this.state.reminders}/>
                                    <Input onChange={this.handleChange} name="remind-checkboxes" type="checkbox" value="reminders-Toys" label="Toys" disabled={this.state.reminders}/>
                                    <Input onChange={this.handleChange} name="remind-checkboxes" type="checkbox" value="reminders-Video-Games" label="Video Games" disabled={this.state.reminders}/>
                                    <Input onChange={this.handleChange} name="remind-checkboxes" type="checkbox" value="reminders-Grocery" label="Grocery" disabled={this.state.reminders}/>
                                    <Input onChange={this.handleChange} name="remind-checkboxes" type="checkbox" value="reminders-Home" label="Home" disabled={this.state.reminders}/>
                                    <Input onChange={this.handleChange} name="remind-checkboxes" type="checkbox" value="reminders-Kitchen" label="Kitchen" disabled={this.state.reminders}/>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <hr />
                            <a>Unsubscribe from all</a>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PriceAlerts;