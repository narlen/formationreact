import React from "react";
import { Link } from "react-router-dom";
import {PropTypes} from "prop-types";
import { connect } from 'react-redux';
import { addToCart } from '../Panier/store/action';

export function PizzaItem(props) {
  console.log("props", props);
  return (
    <div className="pizza-link">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <Link to={`/pizza/${props.name}`} className="title is-4">
                    {props.name}
                  </Link>
                </div>
                <div className="column is-3">
                  <p className="title is-4 has-text-primary">{props.price} €</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content">{props.content}</div>
          <button
            type="button"
            className="button is-primary is-small is-rounded"
            onClick={() => props.addPizza({ name: props.name, price: props.price })}
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

const mapDispatchToProps = dispatch => {
  console.log("dispatch", dispatch);
  return {
    addPizza: (obj) => dispatch(addToCart({name:obj.name,price:obj.price}))
  };
}
export default connect(null,mapDispatchToProps)(PizzaItem);
