import React, { Component } from "react";
import FetchPizza from "../services/fetchPizza";
import WaitingScreen from "../Structure/WaitingScreen";
import PizzaList from "./PizzaList";

class PizzaListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: [],
      pizzasTemp: [],
      testLoading: true
    };
  }

  updateSearch = object => {
    const filter = object.target.value.toLowerCase();
    const pizzaFiltered = this.state.pizzas.filter(pizza => {
      return pizza.name.toLowerCase().includes(filter);
    });
    this.setState({ pizzasTemp: pizzaFiltered });
  };

  componentDidMount() {
    FetchPizza().then(pizza =>
      this.setState({ pizzas: pizza, testLoading: false, pizzasTemp: pizza })
    );
  }

  render() {
    if (this.state.testLoading) {
      return <WaitingScreen />;
    }
    return (
      <PizzaList
        pizzasTemp= {this.state.pizzasTemp}
        pizzas= {this.state.pizzas}
        updateSearch={this.updateSearch}
        addPizza={this.props.addPizza}
      />
    );
  }
}

export default PizzaListContainer;
