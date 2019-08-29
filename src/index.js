import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bulma/css/bulma.css";
import "./assets/styles.scss";

import Header from "./Structure/Header.jsx";
import Router from "./Structure/Router.jsx";
import ErrorBoundary from "./Structure/ErrorBoundary.jsx";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
