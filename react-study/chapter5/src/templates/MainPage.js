import React from 'react';
import Header from '../organisms/Header';

const MainPage = ({ isLogin }) => {
  return (
    <>
      <Header isLogin={isLogin} />
      <h1>로그인 성공!</h1>
    </>
  );
};

export default MainPage;
