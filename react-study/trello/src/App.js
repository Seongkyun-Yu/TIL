import React from 'react';
import './App.css';

import BoardContext from './Context/BoardContext';
import useBoardData from './Hook/useBoardData';

import Header from './components/organisms/Header';

import LoginPage from './components/templates/LoginPage';
import MainPage from './components/templates/MainPage';

function App() {
  const [
    state,
    logIn,
    logOut,
    insertNewBoard,
    deleteBoard,
    inputMenu,
    inputChange,
  ] = useBoardData();

  const data = {
    state,
    logIn,
    logOut,
    insertNewBoard,
    deleteBoard,
    inputMenu,
    inputChange,
  };

  return (
    <div>
      <BoardContext.Provider value={data}>
        <Header />
        {state.isLogin ? <MainPage /> : <LoginPage />}
      </BoardContext.Provider>
    </div>
  );
}

export default React.memo(App);
