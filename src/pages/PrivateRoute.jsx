import React from 'react';
import { Redirect, Route } from 'react-router';
import useAppData from '../state/dataLayer';
import Home from './Home';

const PrivateRoute = () => {
  const [{ isLoggedIn }] = useAppData();
  return (
    <Route
      render={({ location }) =>
        isLoggedIn ? (
          <Home />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
