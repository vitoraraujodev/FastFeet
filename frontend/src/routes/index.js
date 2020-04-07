import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';

import DeliveryList from '~/pages/Delivery/List';
import DeliveryNew from '~/pages/Delivery/New';

import DeliverymanList from '~/pages/Deliveryman/List';
import DeliverymanNew from '~/pages/Deliveryman/New';

import RecipientList from '~/pages/Recipient/List';
import RecipientNew from '~/pages/Recipient/New';

import ProblemList from '~/pages/Problem/List';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} notPrivate />
        <Route path="/delivery" exact component={DeliveryList} />
        <Route path="/delivery/new" component={DeliveryNew} />
        <Route path="/deliveryman" exact component={DeliverymanList} />
        <Route path="/deliveryman/new" component={DeliverymanNew} />
        <Route path="/recipients" exact component={RecipientList} />
        <Route path="/recipients/new" component={RecipientNew} />
        <Route path="/problems" exact component={ProblemList} />
      </Switch>
    </BrowserRouter>
  );
}
