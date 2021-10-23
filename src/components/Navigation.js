import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';

const NavigationStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;

  button {
    color: #d3bc8d;
    background-color: black;
  }
`;

export default function Navigation() {
  const history = useHistory();
  return (
    <NavigationStyle>
      <ButtonGroup size="lg">
        <button
          onClick={() => history.push('/team')}
          type="button"
          className="btn border border-dark"
        >
          Team
        </button>
        <button
          onClick={() => history.push('/new')}
          type="button"
          className="btn border border-dark"
        >
          New
        </button>
        <button
          onClick={signOutUser}
          type="button"
          className="btn border border-dark"
        >
          Sign Out
        </button>
      </ButtonGroup>
    </NavigationStyle>
  );
}
