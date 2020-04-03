import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} notPrivate />
      </Switch>
    </BrowserRouter>
  );
}
