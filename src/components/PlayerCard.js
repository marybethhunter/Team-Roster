import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card, CardTitle, CardText, CardImg, CardImgOverlay,
} from 'reactstrap';
import { deletePlayer, getAllPlayers } from '../api/data/PlayerData';

const DivStyle = styled.div`
  margin: 10px;
`;

const ButtonStyle = styled.button`
  margin: 2px;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 2px solid #d3bc8d;
`;

export default function PlayerCard({
  player, setPlayers, setEditItem, user,
}) {
  const history = useHistory();
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey, player.uid).then(setPlayers);
      history.push('/team');
    } else if (method === 'update') {
      setEditItem(player);
      history.push('/new');
    }
  };

  useEffect(() => {
    let isMounted = true;
    getAllPlayers(user.uid).then((playerArray) => {
      if (isMounted) setPlayers(playerArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <DivStyle>
        <Card inverse>
          <CardImg width="100%" src={player.imageURL} alt={player.name} />
          <CardImgOverlay>
            <CardTitle tag="h5">{player.name}</CardTitle>
            <CardText>{player.position}</CardText>
            <ButtonStyle
              type="button"
              className="btn"
              onClick={() => handleClick('update')}
            >
              Update Player
            </ButtonStyle>
            <ButtonStyle
              type="button"
              className="btn"
              onClick={() => handleClick('delete')}
            >
              Delete Player
            </ButtonStyle>
          </CardImgOverlay>
        </Card>
      </DivStyle>
    </>
  );
}

PlayerCard.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
    imageURL: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};
