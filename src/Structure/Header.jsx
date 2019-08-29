import React from "react";
import Logo from "../img/logo.png";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="is-primary navbar">
        <div className="navbar-brand">
        <Link exact to="/" className="navbar-item">
            <img src={Logo} alt="PizzaYolo logo" />
        </Link>
          <button
            className="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
          <NavLink exact to="/" activeClassName="active" className="navbar-item">
              Accueil
            </NavLink>
            <NavLink to="/pizzas" activeClassName="active" className="navbar-item">
              Nos Pizzas
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
