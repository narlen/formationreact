import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: null };
  }

  static getDerivedStateFromError(error) {
    return { errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div
          style={{
            padding: "0 10px 10px",
            backgroundColor: "rgba(0,0,255,0.2)"
          }}
        >
          <h1>Quelque chose s'est mal passé...</h1> {this.state.errorMessage}
        </div>
      );
    }

    return this.props.children;
  }
}
