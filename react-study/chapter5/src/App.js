import React, { useState } from 'react';

import LoginPage from './templates/LoginPage';
import MainPage from './templates/MainPage';

const users = [
  {
    id: 'aaaa',
    password: '111111',
  },
  {
    id: 'bbbb',
    password: '111111',
  },
];

const menus = [
  {
    title: '오늘의 식단 지우기',
  },
];

function App() {
  const [state, setState] = useState({
    isLogin: false,
    test: 'test',
  });

  const logIn = (id, password) => {
    const canLogIn = users.find(
      (user) => user.id === id && user.password === password,
    );

    canLogIn ? setState({ ...state, isLogin: true }) : setState(state);
  };

  return (
    <>
      {state.isLogin ? (
        <MainPage isLogin={state.isLogin} />
      ) : (
        <LoginPage isLogin={state.isLogin} logIn={logIn} />
      )}
    </>
  );
}

export default App;
