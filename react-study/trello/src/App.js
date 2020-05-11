import React, { useState } from 'react';

import LoginPage from './components/templates/LoginPage';
import MainPage from './components/templates/MainPage';

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

let menuBoards = [
  {
    title: '오늘의 식단',
    menu: ['참치김밥', '치즈김밥', '라면'],
  },
  {
    title: '내일 식단',
    menu: ['라면땅', '제육볶음', '콜라'],
  },
  {
    title: '내일 식단',
    menu: [],
  },
  {
    title: '내일 식단',
    menu: [],
  },
];

function App() {
  const [state, setState] = useState({
    isLogin: false,
    loginId: '',
    menuBoards,
  });

  const logIn = (id, password) => {
    const canLogIn = users.find(
      (user) => user.id === id && user.password === password,
    );

    canLogIn
      ? setState({ ...state, isLogin: true, loginId: id })
      : setState(state);
  };

  const logOut = () => {
    setState({ ...state, isLogin: false, loginId: '' });
  };

  const deleteBoard = (index) => {
    menuBoards = state.menuBoards.filter((_, i) => i !== index);

    setState({ ...state, menuBoards });
  };

  return (
    <>
      {state.isLogin ? (
        <MainPage
          isLogin={state.isLogin}
          loginId={state.loginId}
          logOut={logOut}
          menuBoards={state.menuBoards}
          deleteBoard={deleteBoard}
          state={state}
          setState={setState}
        />
      ) : (
        <LoginPage isLogin={state.isLogin} logIn={logIn} logOut={logOut} />
      )}
    </>
  );
}

export default App;
