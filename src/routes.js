import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as R from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={R.Home} />
        <Route exact path="/login" component={R.Login} />
        <Route exact path="/register" component={R.Register} />
        <Route exact path="/home" component={R.HomeE} />
        <Route exact path="/details-scheduling" component={R.DScheduling} />
      </Switch>
    </BrowserRouter>
  );
}
