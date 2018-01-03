import React, {Component} from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import NotFoundPage from "./NotFoundPage";

export default class App extends Component {
  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
