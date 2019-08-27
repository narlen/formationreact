import React, { Component } from "react";

function Cart({ resetCounter }) {
  return (
    <>
      <h2 className="title is-h2">Mon Panier</h2>
      <ul>
        <li>Reine</li>
        <li>Napolitaine</li>
      </ul>
      <hr />
      <p>
        <b>Total: 22 €</b>
      </p>
      <br />
      <button onClick = {resetCounter} className="button is-warning">Vider le panier</button>
    </>
  );
}
export default Cart;
