// Framework
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Libraries
import "bootstrap/dist/css/bootstrap.css";

// Client Imports
import AppLayout from "../../ui/layouts/AppLayout";
import configureStore from "../../ui/configureStore";

// Make redux initial store
const store = configureStore();

// Actual Rendering Function
const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>,
    document.getElementById("render-target")
  );

// Start App
Meteor.startup(() => {
  renderApp();
});