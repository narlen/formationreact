import React, { Component } from "react";
import PizzaItem from "./PizzaItem";
import Cart from "./Cart";
import FetchPizza from "../services/fetchPizza";
import WaitingScreen from "./WaitingScreen";

class PizzaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      pizzas: [],
      test: true
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  componentDidMount() {
    FetchPizza().then(pizza => this.setState({ pizzas: pizza, test: false }));
  }

  render() {
    if (this.state.test) {
      return <WaitingScreen />;
    }
    return (
      <section className="section main-container">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-10-desktop is-12-tablet">
              <div className="filter-container">
                <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
                <div className="field">
                  <label className="label">Filtrer: </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      type="text"
                      placeholder="nom de la pizza"
                    />
                  </div>
                </div>
                <article className="message is-success">
                  <div className="message-body">
                    {" "}
                    {this.state.counter} pizzas sélectionnées
                  </div>
                </article>
              </div>
              <div className="columns is-multiline">
                {this.state.pizzas.map((pizza, i) => (
                  <div className="column is-4-desktop is-6-tablet">
                    <PizzaItem
                      name={pizza.name}
                      price={pizza.price}
                      content={pizza.desc}
                      incrementCounter={this.incrementCounter}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="column is-2-desktop is-12-tablet">
              <Cart resetCounter={this.resetCounter} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PizzaList;
