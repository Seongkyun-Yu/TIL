import React, { useContext } from 'react';
import BoardContext from '../../Context/BoardContext';

import NeedLogin from '../atoms/NeedLogin';
import LogoutBtn from '../atoms/LogoutBtn';

import classNames from 'classnames/bind';
import style from './style/Header.css';

const st = classNames.bind(style);

const Header = () => {
  const context = useContext(BoardContext);
  const { state, logOut } = context;

  return (
    <header className={st('headerStyle')}>
      {state.isLogin ? (
        <>
          <h2>{state.loginId}</h2>
          <LogoutBtn logOut={logOut} loginId={state.loginId} />
        </>
      ) : (
        <NeedLogin logOut={logOut} />
      )}
    </header>
  );
};

export default React.memo(Header);
