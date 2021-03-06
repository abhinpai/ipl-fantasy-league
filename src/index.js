import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './pages/SignIn';
import reportWebVitals from './reportWebVitals';
import './scss/main.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import PrivateRoute from './pages/PrivateRoute';
import { DataLayerContext } from './state/dataLayer';
import reducer, { initialData } from './state/reducer';
import Notification from './components/molecules/Notification';

ReactDOM.render(
  <React.StrictMode>
    <DataLayerContext reducer={reducer} initialState={initialData}>
      <Router>
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/home'>
            <PrivateRoute />
          </Route>
          <Route path='/'>
            <PrivateRoute authorized={false} />
          </Route>
        </Switch>
      </Router>
      <Notification />
      <div className='not-support'>
        <p>Sorry, This webapp does'nt support on any small screen device</p>
      </div>
    </DataLayerContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
