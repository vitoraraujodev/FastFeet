import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import DeliveryList from '~/pages/Delivery/List';
import DeliverymanList from '~/pages/Deliveryman/List';
import RecipientList from '~/pages/Recipient/List';
import ProblemList from '~/pages/Problem/List';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} notPrivate />
        <Route path="/delivery" exact component={DeliveryList} />
        <Route path="/deliveryman" exact component={DeliverymanList} />
        <Route path="/recipients" exact component={RecipientList} />
        <Route path="/problems" exact component={ProblemList} />
      </Switch>
    </BrowserRouter>
  );
}
