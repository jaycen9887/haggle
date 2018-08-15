import React, { Component } from "react";
import {Row, Input, Button} from "react-materialize";

import "./SearchBar.css";

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            category: "All",
            searchItem: "",
            priceLow: 0,
            priceHigh: 0
        }
    }

    submit = () => {

        console.log("Category: " + this.state.category);
        console.log("Search Item: " + this.state.searchItem);
        console.log("Price Low: " + this.state.priceLow);
        console.log("Price High: " + this.state.priceHigh);

    }

    handleKeyPress = (event) => {
        event.preventDefault();
        if(event.key === "Enter"){
            this.submit();
        }
    }

    handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value
        });
    }

    handleItemChange = (e) => {
        this.setState({
            searchItem: e.target.value
        });
    }

    handlePriceHighChange = (e) => {
        this.setState({
            priceHigh: e.target.value
        });
    }

    handlePriceLowChange = (e) => {
        this.setState({
            priceLow: e.target.value
        });
    }

    render(){
        return(
            <div className="search-bar">
                <Row>
                    <Input className="select" onChange={this.handleCategoryChange} s={3} type="select" defaultValue="Categories">
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
                    <Input onChange={this.handleItemChange} placeholder="Item" s={3}/>
                    <Input onChange={this.handlePriceLowChange} placeholder="Price Low" s={2}/>
                    <Input onChange={this.handlePriceHighChange} ref="priceHigh" placeholder="Price High" s={2}/>
                    <Button onClick={this.submit}>Submit</Button>
                </Row>
            </div>
        );
    }
}

export default SearchBar;