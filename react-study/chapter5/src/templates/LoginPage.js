import React from 'react';
import Header from '../organisms/Header';
import LoginSection from '../organisms/LoginSection';

const LoginPage = ({ isLogin, logIn }) => {
  return (
    <>
      <Header isLogin={isLogin} />
      <LoginSection logIn={logIn} />
    </>
  );
};

export default LoginPage;
