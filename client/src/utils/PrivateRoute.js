import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useSelector((state) => state.userReducer);
  const { user } = userData;
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to='/register' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
