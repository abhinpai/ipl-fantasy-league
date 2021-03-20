import React from 'react';
import { Redirect, Route } from 'react-router';
import Home from './Home';

function PrivateRoute({ authorized }) {
  console.log('Reched to private route');
  return (
    <Route
      render={({ location }) =>
        authorized ? (
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
}

export default PrivateRoute;
