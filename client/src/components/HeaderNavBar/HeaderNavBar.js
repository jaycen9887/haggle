import React, { Component } from "react";
import {Navbar, NavItem} from "react-materialize";

import Account from "../Account";
import "./HeaderNavBar.css";

class HeaderNavBar extends Component{

    render(){
        return(
            <div className="container"> 
                <Navbar className="topNavbar" brand='haggle'>
                    <div className="nav-items">
                        <div className="nav-links">
                            <NavItem className="nav-cat" href=''>Electronics</NavItem>
                            <NavItem className="nav-cat" href=''>Clothes</NavItem>
                            <NavItem className="nav-cat" href=''>Toys</NavItem>
                            <NavItem className="nav-cat" href=''>Video Games</NavItem>
                            <NavItem className="nav-cat" href=''>Grocery</NavItem>
                            <NavItem className="nav-cat" href=''>Home</NavItem>
                            <NavItem className="nav-cat" href=''>Kitchen</NavItem>
                        </div>
                        <div className="nav-account">
                            <Account />
                        </div>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default HeaderNavBar;