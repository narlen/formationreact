import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";
import "./assets/styles.scss";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import MainContainer from "./components/MainContainer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
