import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Team from '../views/Team';
import NewPlayer from '../views/NewPlayer';

export default function Routes({
  player,
  players,
  setEditItem,
  setPlayers,
  user,
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Team
              setEditItem={setEditItem}
              setPlayers={setPlayers}
              players={players}
              player={player}
              user={user}
            />
          )}
        />
        <Route
          exact
          path="/team"
          component={() => (
            <Team
              setEditItem={setEditItem}
              setPlayers={setPlayers}
              players={players}
              player={player}
              user={user}
            />
          )}
        />
        <Route
          exact
          path="/new"
          component={() => (
            <NewPlayer
              setEditItem={setEditItem}
              player={player}
              setPlayers={setPlayers}
              user={user}
            />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    imageURL: PropTypes.string,
    uid: PropTypes.string,
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

Routes.defaultProps = { player: {} };
