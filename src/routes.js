import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./contexts";

import * as R from "./pages";

export default function Routes() {
  const context = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        {context.user.name ? (
          <>
            <Route exact path="/home" component={R.HomeEntrepreneur} />
            <Route exact path="/schedules/:id" component={R.SchedulesDetails} />
            <Route exact path="/schedules" component={R.Schedules} />
            <Route
              exact
              path="/request-collection"
              component={R.RequestCollection}
            />
          </>
        ) : (
          <>
            <Route exact path="/" component={R.Home} />
            <Route exact path="/login" component={R.Login} />
            <Route exact path="/register" component={R.Register} />
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
