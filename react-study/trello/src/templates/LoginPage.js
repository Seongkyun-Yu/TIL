import React from 'react';
import Header from '../organisms/Header';
import LoginSection from '../organisms/LoginSection';

const LoginPage = ({ isLogin, loginId, logIn, logOut }) => {
  return (
    <>
      <Header isLogin={isLogin} loginId={loginId} logOut={logOut} />
      <LoginSection logIn={logIn} />
    </>
  );
};

export default LoginPage;
