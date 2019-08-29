import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "bulma/css/bulma.css";
import "./assets/styles.scss";

import Header from "./Structure/Header.jsx";
import Router from "./Structure/Router.jsx";
import ErrorBoundary from "./Structure/ErrorBoundary.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
