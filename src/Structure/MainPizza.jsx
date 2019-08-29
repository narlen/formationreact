import React, { Component } from "react";
import Cart from "../Panier/Cart";
import PizzaListContainer  from "../AffichageList/PizzaListContainer";

class MainPizza extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panier: [],
      test: false
    };
  }

  addPizza = (a) => {
    this.setState({ panier: [...this.state.panier, a] });
  };

  flushCart = () => {
    this.setState({ panier: [], test: true });
  };

  render() {
    if(this.state.test){
      throw new Error("Vous ne pouvez pas décommander !!");
    }
    return (
      <section className="section main-container">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-10-desktop is-12-tablet">
              <PizzaListContainer 
              addPizza = {this.addPizza}
              />
            </div>
            <div className="column is-2-desktop is-12-tablet">
              <Cart
                flushCart={this.flushCart}
                panier={this.state.panier}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default MainPizza;
