import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Landing from './pages/Landing';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  const userLogin = useSelector((state) => state.userReducer);
  const { user } = userLogin;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
