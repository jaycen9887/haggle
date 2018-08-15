import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PriceAlerts from "./pages/PriceAlerts";
import PaymentMethods from "./pages/PaymentMethods";

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/electronics" component={Electronics}/>
            <Route exact path="/search" component={Search} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/policy" component={Policy}/>
            <Route exact path="/price-alerts" component={PriceAlerts}/>
            <Route exact path="/payment-methods" component={PaymentMethods}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
