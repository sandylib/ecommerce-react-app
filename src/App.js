import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import MyProfile from './views/MyProfile/MyProfile';
import Zodiac from './views/Zodiac/Zodiac';
import AppAppBar  from './views/AppAppBar/AppAppBar';

import NotFound from './views/NotFound/NotFound';

import { AuthenticationManger } from './components/Authentication/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <AuthenticationManger>
      <AppAppBar />
      
      <Switch>
        <PrivateRoute exact permissions={['admin']}  path="/"  component={MyProfile} />
        <Route exact path="/zodiac" component={Zodiac} />
        <Route exact path="/signin"  component={SignIn} />
        <Route exact path="/signup"  component={SignUp} />
        <Route path="/*"  component={NotFound} />
      </Switch>

      </AuthenticationManger>

    </BrowserRouter>
  );
}
