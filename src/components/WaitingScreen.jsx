import React from "react";

function WaitingScreen() {
  return (
    <section class="section main-container">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-10-desktop is-12-tablet">
            <h1 class="title is-h1 has-text-centered is-italic">
              Chargement des pizzas...
            </h1>
            <progress class="progress is-large is-primary" max="100">
              60%
            </progress>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WaitingScreen;