import React from "react";

export default function Pizza(props) {
  console.log(props);
  return (
    <>
      <h1>{`Pizza ${props.match.params.name}`}</h1>
      <p>
        <i>Probablement notre meilleure pizza...</i>
      </p>
    </>
  );
}
