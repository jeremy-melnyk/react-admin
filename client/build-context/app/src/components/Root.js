import React, {Component} from "react";
import PropTypes from "prop-types";
import {Provider} from "react-redux";

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <h1>React Admin</h1>
          <p>Add content here...</p>
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
