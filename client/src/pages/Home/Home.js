import React, { Component } from 'react';
import FooterNav from '../../components/FooterNav';
import HeaderNavBar from '../../components/HeaderNavBar';
import SearchBar from '../../components/SearchBar';

import "./Home.css";

class Home extends Component {
    render(){
        return(
            <div>
                <div className="topHalf">
                    <HeaderNavBar />
                    <h5>All the savings, none of the hassel</h5>
                    <div className="container">
                        <SearchBar />
                    </div>
                </div>
                <div className="footerNav">
                    <FooterNav />
                </div>
            </div>
        );
    }
}

export default Home;
