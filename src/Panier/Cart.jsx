import React, { Component } from "react";
import { connect } from 'react-redux';
import { flushCart } from './store/action';

export function Cart(props) {
  console.log("props",props);
  return (
    <>
      <h2 className="title is-h2">Mon Panier</h2>
      <ul>
        {props.panier.map(pizza => (
          <li>{pizza.name}</li>
        ))}
      </ul>
      <hr />
      <p>
        <b>{`Total: ${props.panier.reduce((total, elem) => {
          return total + elem.price;
        }, 0)} €`}</b>
      </p>
      <br />
      <button onClick={() => props.flush()} className="button is-warning">
        Vider le panier
      </button>
    </>
  );
}

const mapStateToProps = state => {
  ///console.log(state);
  return {
    panier: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => {
  ///console.log("dispatch", dispatch);
  return {
    flush: () => dispatch(flushCart())
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
