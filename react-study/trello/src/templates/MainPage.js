import React from 'react';
import Header from '../organisms/Header';
import MenuBoard from '../organisms/MenuBoard';

const MainPage = ({
  loginId,
  logOut,
  menuBoards,
  deleteBoard,
  state,
  setState,
}) => {
  return (
    <>
      <Header isLogin={true} loginId={loginId} logOut={logOut} />
      <MenuBoard
        menuBoards={menuBoards}
        deleteBoard={deleteBoard}
        state={state}
        setState={setState}
      />
    </>
  );
};

export default MainPage;
