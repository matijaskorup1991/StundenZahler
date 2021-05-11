import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';

import Landing from './pages/Landing';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Months from './pages/Months';
import Month from './pages/Month';
import Header from './components/Header';
import Days from './pages/Days';

const App = () => {
  const userLogin = useSelector((state) => state.userReducer);
  const { user } = userLogin;
  return (
    <BrowserRouter>
      {user && <Header />}
      <Switch>
        <Route exact path='/' component={Landing} />
        <PrivateRoute exact path='/home' component={HomePage} />
        <Route
          exact
          path='/register'
          component={() => (user ? <Redirect to='/' /> : <Register />)}
        />
        <Route
          exact
          path='/login'
          component={() => (user ? <Redirect to='/' /> : <Login />)}
        />
        <PrivateRoute exact path='/days' component={Days} />
        <PrivateRoute exact path='/months' component={Months} />
        <PrivateRoute exact path='/months/:id' component={Month} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
