import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, props = {}, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routerProps => {
        if (sessionStorage.getItem("token")) {
          return <Component {...routerProps} {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
