import React from 'react';
import { Switch } from 'react-router-dom';

import Exclusives from '../pages/Exclusives';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Promotion from '../pages/Promotion';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/exclusives" component={Exclusives} />
    <Route path="/promotion" component={Promotion} />
    <Route path="/favorites" component={Favorites} />
    <Route path="*" component={() => <h1>404</h1>} />
  </Switch>
);

export default Routes;
