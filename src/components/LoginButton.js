// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const uri_front = process.env.REACT_APP_FRONT;
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant="primary" onClick={() => loginWithRedirect({ redirectUri: uri_front+'#/app' })}>Log In</Button>
  );
};

export default LoginButton;