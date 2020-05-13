import React, { useState } from 'react';
import './App.css';

import Header from './components/organisms/Header';

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

function App() {
  const [logInState, setLogInState] = useState({
    isLogin: false,
    loginId: '',
  });

  const logIn = (id, password) => {
    const canLogIn = users.find(
      (user) => user.id === id && user.password === password,
    );

    canLogIn
      ? setLogInState({ ...logInState, isLogin: true, loginId: id })
      : setLogInState(logInState);
  };

  const logOut = () => {
    setLogInState({ ...logInState, isLogin: false, loginId: '' });
  };

  return (
    <div className="App">
      <Header
        isLogin={logInState.isLogin}
        loginId={logInState.loginId}
        logOut={logOut}
      />
      {logInState.isLogin ? (
        <MainPage />
      ) : (
        <LoginPage logInState={logInState} logIn={logIn} />
      )}
    </div>
  );
}

export default App;
