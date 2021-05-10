import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Landing from './pages/Landing';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Months from './pages/Months';
import Month from './pages/Month';
import Header from './components/Header';

const App = () => {
  const userLogin = useSelector((state) => state.userReducer);
  const { user } = userLogin;
  return (
    <BrowserRouter>
      {user && <Header />}
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/months' component={Months} />
        <Route exact path='/months/:id' component={Month} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
