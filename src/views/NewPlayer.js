import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Jumbotron, Container } from 'reactstrap';
import NewPlayerForm from '../components/NewPlayerForm';

const NewPlayerViewStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #d3bc8d;
  margin-bottom: 30px;
`;

export default function NewPlayer({
  player, setPlayers, setEditItem, user,
}) {
  return (
    <>
      <DivStyle>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">ADD/EDIT YOUR PLAYER!</h1>
            <p className="lead">
              Use the form below to create or update your MVP this week!
            </p>
          </Container>
        </Jumbotron>
      </DivStyle>
      <NewPlayerViewStyle>
        <NewPlayerForm
          player={player}
          setPlayers={setPlayers}
          setEditItem={setEditItem}
          user={user}
        />
      </NewPlayerViewStyle>
    </>
  );
}

NewPlayer.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageURL: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }),
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

NewPlayer.defaultProps = { player: {} };
