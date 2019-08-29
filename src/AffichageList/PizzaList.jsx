import React from "react";
import PizzaItem from "./PizzaItem";
import {PropTypes} from "prop-types";

export default function PizzaList(props) {
    return (
      <>
        <div className="filter-container">
          <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
          <div className="field">
            <label className="label">Filtrer: </label>
            <div className="control">
              <input
                className="input is-primary"
                type="text"
                placeholder="nom de la pizza"
                onChange={props.updateSearch}
              />
            </div>
          </div>
          <article className="message is-success">
            <div className="message-body">
              {`${props.pizzasTemp.length} pizzas sélectionnées`}
            </div>
          </article>
        </div>
        <div className="columns is-multiline">
          {props.pizzasTemp.map(pizza => (
            <div className="column is-4-desktop is-6-tablet">
              <PizzaItem
                name={pizza.name}
                price={pizza.price}
                content={pizza.desc}
                addPizza={props.addPizza}
              />
            </div>
          ))}
        </div>
      </>
    );
}
PizzaItem.propTypes = {
  pizzasTemp: PropTypes.array,
  updateSearch: PropTypes.func,
  price: PropTypes.number.isRequired
};