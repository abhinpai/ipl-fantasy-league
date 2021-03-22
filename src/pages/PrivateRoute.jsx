import React from 'react';
import { Redirect, Route } from 'react-router';
import useAppData from '../state/dataLayer';
import { localStorageKeys } from '../utils/constants';
import Home from './Home';

const PrivateRoute = () => {
  const [{ loggedsUser }] = useAppData();

  const isUserLoggedIn = () => {
    const user = localStorage.getItem(localStorageKeys.user);
    let localUser = null;

    if (user) {
      localUser = JSON.parse(user);
    }

    if (
      localUser &&
      loggedsUser &&
      loggedsUser?.emailId === localUser?.emailId &&
      loggedsUser?.name === localUser?.name
    ) {
      return true;
    }
    return false;
  };

  return (
    <Route
      render={({ location }) =>
        isUserLoggedIn() ? (
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
