import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Team from '../views/Team';
import NewPlayer from '../views/NewPlayer';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/team" component={Team} />
        <Route exact patch="/new" component={NewPlayer} />
      </Switch>
    </div>
  );
}
