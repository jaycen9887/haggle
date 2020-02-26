import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    )
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
