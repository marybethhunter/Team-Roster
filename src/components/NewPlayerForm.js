import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { addNewPlayer, updatePlayer } from '../api/data/PlayerData';

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
`;

const ButtonStyle = styled.button`
  margin: 2px;
  border-radius: 5px;
  height: 45px;
  background-color: black;
  color: #d3bc8d;
  border: #d3bc8d solid 2px;
`;

const InputStyle = styled.input`
  background-color: #d3bc8d;
  color: black;
`;

const initialState = {
  name: '',
  position: '',
  imageURL: '',
};

export default function NewPlayerForm({
  player,
  setPlayers,
  setEditItem,
  user,
}) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({ initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(formInput).then((players) => {
        setPlayers(players);
        resetForm();
        history.push('/team');
      });
    } else {
      addNewPlayer({ ...formInput, uid: user.uid }).then((players) => {
        setPlayers(players);
        resetForm();
        history.push('/team');
      });
    }
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    let isMounted = true;
    if (player.firebaseKey) {
      if (isMounted) {
        setFormInput({
          name: player.name,
          firebaseKey: player.firebaseKey,
          imageURL: player.imageURL,
          position: player.position,
          uid: player.uid,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [player]);

  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <label htmlFor="name">
          <div className="input-group">
            <InputStyle
              className="form-control form-control-lg me-1"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Player Name..."
              value={formInput.name || ''}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <label htmlFor="imageURL">
          <div className="input-group">
            <InputStyle
              className="form-control form-control-lg me-1"
              type="url"
              name="imageURL"
              id="imageURL"
              placeholder="Enter Player Image Link..."
              value={formInput.imageURL || ''}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <label htmlFor="position">
          <div className="input-group">
            <InputStyle
              className="form-control form-control-lg me-1"
              type="text"
              name="position"
              id="position"
              placeholder="Enter Position..."
              value={formInput.position || ''}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <span className="input-group-btn">
          <ButtonStyle className="btn" type="submit">
            {player.firebaseKey ? 'Update Player' : 'Add New Player'}
          </ButtonStyle>
        </span>
      </FormStyle>
    </>
  );
}

NewPlayerForm.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageURL: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

NewPlayerForm.defaultProps = {
  player: {},
};
