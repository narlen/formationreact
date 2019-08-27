import React, { Component } from "react";
import { number, func } from "prop-types";


function PizzaItem({ name, price, content, incrementCounter, test }) {
  return (
    <div className="pizza-link">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <p className="title is-4">{name}</p>
                </div>
                <div className="column is-3">
                  <p className="title is-4 has-text-primary">{price} €</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content">{content}</div>
          <button
            type="button"
            className="button is-primary is-small is-rounded"
            onClick={incrementCounter}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

PizzaItem.defaultProps = {
  name: "Margarita",
  price: 0,
  content: "Champignon, lardon"
};
PizzaItem.propTypes = {
  price: number.isRequired,
  name: func
};

export default PizzaItem;
