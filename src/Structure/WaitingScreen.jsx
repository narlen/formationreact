import React from "react";

function WaitingScreen() {
  return (
    <section className="section main-container">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-10-desktop is-12-tablet">
            <h1 className="title is-h1 has-text-centered is-italic">
              Chargement des pizzas...
            </h1>
            <progress className="progress is-large is-primary" max="100">
              60%
            </progress>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WaitingScreen;
