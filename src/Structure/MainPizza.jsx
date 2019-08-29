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


  render() {
    if(this.state.test){
      throw new Error("Vous ne pouvez pas décommander !!");
    }
    return (
      <section className="section main-container">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-10-desktop is-12-tablet">
              <PizzaListContainer/>
            </div>
            <div className="column is-2-desktop is-12-tablet">
              <Cart/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default MainPizza;
