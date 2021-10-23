import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Jumbotron, Container } from 'reactstrap';
import { signInUser } from '../api/auth';

const WelcomeStyle = styled.h1`
  color: #d3bc8d;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 440px;
  color: #d3bc8d;
`;

const ButtonStyle = styled.button`
  color: black;
  background-color: #d3bc8d;
  border-radius: 5px;
`;

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        <WelcomeStyle>Loading...</WelcomeStyle>
      ) : (
        <DivStyle>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Who dat?</h1>
              <p className="lead">
                Keep track of all your favorite Saints players with this sports
                roster.
              </p>
              <p className="lead">
                <ButtonStyle color="primary" onClick={signInUser}>
                  Sign In!
                </ButtonStyle>
              </p>
            </Container>
          </Jumbotron>
        </DivStyle>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};
