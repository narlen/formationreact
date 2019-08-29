import React from "react";
import { Switch, Route } from "react-router";

import Home from "./Home";
import MainPizza from "./MainPizza";
import Pizza from "../AffichageList/Pizza";
import NotFound from "./NotFound";

export default function MainContainer() {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pizzas" component={MainPizza} />
    <Route path="/pizza/:name" component={Pizza} />
    <Route component={NotFound} />
  </Switch>
  );
}

