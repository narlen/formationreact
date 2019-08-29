import React, { Component } from "react";

export default function Cart({ flushCart, panier }) {
  return (
    <>
      <h2 className="title is-h2">Mon Panier</h2>
      <ul>
        {panier.map(pizza => (
          <li>{pizza.name}</li>
        ))}
      </ul>
      <hr />
      <p>
        <b>{`Total: ${panier.reduce((total, elem) => {
          return total + elem.price;
        }, 0)} €`}</b>
      </p>
      <br />
      <button onClick={flushCart} className="button is-warning">
        Vider le panier
      </button>
    </>
  );
}
