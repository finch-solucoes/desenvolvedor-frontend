import React from 'react';
import { Switch } from 'react-router-dom';

import Exclusives from '../pages/Exclusives';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Product from '../pages/Product';
import Promotion from '../pages/Promotion';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/exclusives" component={Exclusives} />
    <Route path="/promotion" component={Promotion} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/product/:id" component={Product} />
    <Route path="*" component={Page404} />
  </Switch>
);

export default Routes;
