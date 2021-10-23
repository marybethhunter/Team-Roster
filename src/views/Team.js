import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';
import PlayerCard from '../components/PlayerCard';

const TeamViewStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`;

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #d3bc8d;
`;

export default function Team({
  setPlayers, setEditItem, players, user,
}) {
  return (
    <>
      <DivStyle>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">TEAM</h1>
            <p className="lead">
              Add your favorite Saints players! Delete them when they have a bad
              game!
            </p>
          </Container>
        </Jumbotron>
      </DivStyle>
      <TeamViewStyle>
        {players.map((player) => (
          <PlayerCard
            key={player.firebaseKey}
            players={players}
            player={player}
            setPlayers={setPlayers}
            setEditItem={setEditItem}
            user={user}
          />
        ))}
      </TeamViewStyle>
    </>
  );
}

Team.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Team.defaultProps = { user: {} };
