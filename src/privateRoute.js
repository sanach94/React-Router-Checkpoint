import React from "react";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component, connected, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        connected ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
