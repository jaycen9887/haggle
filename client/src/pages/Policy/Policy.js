import React, { Component } from "react";
import {} from "react-materialize";

import "./Policy.css";

class Policy extends Component{

    render(){
        return(
            <div className="container policy-comp">
                <div className="privacy-header">   
                    <h1>Privacy Policy</h1>
                </div>
                <div className="policy-effective"><em>Effective as of November, 2017</em></div>
                <div className="privacy-body">
                    <p>
                        This Policy describes HAGGLE's practices regarding personally identifiable information and data ("personal information"). This policy applies to our websites, applications, email, text messages, and social media accounts (the "Platforms"). When you use the Platforms, you agree to the terms in this policy;
                    </p>

                    <h5>
                        The categories of Personal Information we collect
                    </h5>
                    <p>
                        When you visit the Platforms, we may collect information from you. Some of it may be personal information. This information can include search history, IP address, screen resolution, browser used, operating system and settings, access times and referring URL. If you are using a mobile device, we may also collect data that identifies your device, your settings and your location.
                    </p>
                    <p>
                        If you buy products via the Platforms, we may need additional information from you. This information can include your name, age, birthday, gender, email address, telephone number, credit card information, and billing address. You can also choose to store personal information in your user account for future purchases. 
                    </p>
                    <p>
                        If you choose to register, we will collect your email address, password, home address, and other preference information you provide us. If you choose a third-party service, like Facebook Login, to register or login, you are permitting us to use and store that information related to the account. 
                    </p>
                        If you make a purchase on Haggle or within our mobile applications, we may automatically create a "Purchases" account for you, which will give you access to our "Purchases" service, where we will collect your purchase information and create and maintain your purchase information. This can include the personal information that mya be included in the confirimation emails you give us access to. 
                    <p>
                        When you give us persoanl information, you are telling us that the information is true, accurate, complete, and current. You are also telling us that you ahve the authorization to provide it to us. 
                    </p>
                    <h5>How we collect your Personal Information</h5>
                    <p>
                        We collect your personal information directly from you. For example, when you provide us your personal information when you register or buy products.
                    </p>
                    <p>
                        We also collecty your personal information passively. For example, we collect information from you over time and across different Web sites when you visit this Platform. We also use tracking tools like cookies and beacons. To learn more about these tools and how to control them, <a href="/policy#tracking">click here</a>
                    </p>
                    <p>
                        We collect your personal information from third parties. This can include when you log in using a thrid party platform, such as Facebook. In addition, we also integrate third party software (i.e. Google's Invisible CAPTCHA) that collects information about users for security reasons.

                        Platform features may make use of your device attributes and settings that will allow us to determine your physical location. Such technologies may include IP address mapping, WiFi, GPS signals, cell tower positioning or other technologies. We use this information to enhance and personalize your experiance and provide you with offers and services that may be of interest to you. For example, we may help you find your closest store or send you messages that may be of interest to you based on your current location. HAGGLE does not have control over your device settings, but we do recommend enabling location services on your device you can take advantage of the location based features and functionality offered. 
                    </p>
                    <p>
                        If you sign up for the synchronization of your emails to our Purchases service, you authroize us to access the emails in the email accounts you have connected to Purchases, to regulary review theses emails in order to identify those that are booking confirmation we can import into our Purchases service, to parse these emails and to add the information we have collected including a copy of the email to your Purchases account. 
                    </p>
                </div>
            </div>
        );
    }
}

export default Policy;