import React, {Component} from "react";
import PropTypes from "prop-types";
import {Switch, NavLink, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import NotFoundPage from "./NotFoundPage";

export default class App extends Component {
  render() {
    const activeStyle = {
      color: "blue"
    };
    const delimiter = " | ";
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {delimiter}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
