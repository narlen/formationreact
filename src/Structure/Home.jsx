import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section className="hero is-primary is-fullheight homepage">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">Pizza Yolo</h1>
            <h2 className="subtitle is-size-3">
              Juste les <span className="best">meilleures</span> pizzas.
            </h2>
            <Link to="/pizzas" className="button is-large is-primary">
              Commander maintenant
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
export default Home;
