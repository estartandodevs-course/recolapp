import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./contexts";

import * as R from "./pages";
import { getCurrentUser } from "./services/auth.service";

const Routes = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const currentUser = async () => {
      const response = await getCurrentUser();
      setUser(response);
    };
    currentUser();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/faq" component={R.Faq} />
        {user?.name ? (
          <>
            <Route exact path="/home" component={R.Home} />
            <Route exact path="/schedules/:id" component={R.SchedulesDetails} />
            <Route exact path="/schedules" component={R.Schedules} />
            <Route exact path="/request-collect" component={R.RequestCollect} />
            <Route exact path="/cancelled" component={R.Cancelled} />
            <Route exact path="/collect-confirm" component={R.CollectConfirm} />
            <Route exact path="/profile" component={R.Profile} />
            <Route
              exact
              path="/collect-cancelled"
              component={R.CollectCancelled}
            />
            <Route
              exact
              path="/schedules-collector"
              component={R.SchedulesCollector}
            />

            <Redirect to="/home" />
          </>
        ) : (
          <>
            <Route exact path="/" component={R.Introduction} />
            <Route exact path="/login" component={R.Login} />
            <Route exact path="/register" component={R.Register} />
            <Route exact path="/search-collect" component={R.SearchCollect} />
            <Route exact path="/order-detail" component={R.OrderDetail} />
            {/* <Redirect to="/" /> */}
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
