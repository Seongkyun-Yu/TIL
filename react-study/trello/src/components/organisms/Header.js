import React from 'react';
import NeedLogin from '../atoms/NeedLogin';
import LogoutBtn from '../atoms/LogoutBtn';

import classNames from 'classnames/bind';
import style from './style/Header.css';

const st = classNames.bind(style);

const Header = ({ isLogin, loginId, logOut }) => {
  return (
    <header className={st('headerStyle')}>
      {isLogin ? (
        <>
          <h2>{loginId}</h2>
          <LogoutBtn logOut={logOut} loginId={loginId} />
        </>
      ) : (
        <NeedLogin logOut={logOut} />
      )}
    </header>
  );
};

export default Header;
