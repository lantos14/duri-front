/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import ProductsTab from "./ProductsTab";
import StoresTab from "./StoresTab";
import ResultTab from "./ResultTab";

import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className='switch'>
        <Switch>
          <Route exact path="/" component={ProductsTab} />
          <Route exact path="/store" component={StoresTab} />
          <Route exact path="/result" component={ResultTab} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
