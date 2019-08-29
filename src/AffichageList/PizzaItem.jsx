import React from "react";
import { Link } from "react-router-dom";
import {PropTypes} from "prop-types";

function PizzaItem({ name, price, content, addPizza }) {
  return (
    <div className="pizza-link">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <Link to={`/pizza/${name}`} className="title is-4">
                    {name}
                  </Link>
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
            onClick={() => addPizza({ name, price })}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
PizzaItem.defaultProps = {
  name: "Renaudaine"
};

PizzaItem.propTypes = {
  price: PropTypes.number.isRequired
};
export default PizzaItem;
