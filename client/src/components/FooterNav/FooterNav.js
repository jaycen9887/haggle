import React, { Component } from 'react';
import { Footer } from "react-materialize";
import FontAwesome from "react-fontawesome";
import "./FooterNav.css";

class FooterNav extends Component{

    render() {
        return(
            <div>
                <Footer className="footer" copyrights="&copy; 2017 EATHROME - Jaycen Milling"
                    links={
                        <ul className="footer_links">
                            <li><a className="grey-text text-lighten-3" href="/About">About</a></li>
                            <li><a className="grey-text text-lighten-3" href="/Contact">Contact</a></li>
                            <li><a className="grey-text text-lighten-3" href="/FAQ">FAQ</a></li>
                        </ul>
                    }
                >
                    <p><span><a className="grey-text" href="/policy">Privacy</a></span><span><a className="grey-text" href="/terms">Terms & Conditions</a></span><span><a className="grey-text" href="/ads">Ad Choices</a></span></p>
                    <p><span><a><FontAwesome name="facebook" /></a></span><span><a><FontAwesome name="twitter" /></a></span><span><a><FontAwesome name="youtube-play" /></a></span><span><a><FontAwesome name="instagram" /></a></span></p>
                </Footer>
            </div>
        );
    }
}

export default FooterNav;