import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Select } from "./components/Select";
import { Home } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/charles" component={Select} />
      </Switch>
    </BrowserRouter>
  );
}
