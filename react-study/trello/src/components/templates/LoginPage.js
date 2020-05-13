import React, { useEffect } from 'react';
import LoginSection from '../organisms/LoginSection';

const LoginPage = ({ logInState, logIn }) => {
  useEffect(() => {
    return () => alert('login hi');
  }, [logInState]);
  return <LoginSection logIn={logIn} />;
};

export default LoginPage;
