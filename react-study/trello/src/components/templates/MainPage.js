import React, { useState } from 'react';
import MenuBoard from '../organisms/MenuBoard';

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

const MainPage = () => {
  const [menuState, setMenuState] = useState(menuBoards);

  const insertNewBoard = (e) => {
    if (e.keyCode !== 13) return;

    menuBoards = [...menuState, { title: e.target.value, menu: [] }];
    setMenuState(menuBoards);

    e.target.value = '';
  };

  const deleteBoard = (index) => {
    menuBoards = menuState.filter((_, i) => i !== index);
    setMenuState(menuBoards);
  };

  return (
    <>
      <MenuBoard
        menuBoards={menuBoards}
        deleteBoard={deleteBoard}
        insertNewBoard={insertNewBoard}
        menuState={menuState}
        setMenuState={setMenuState}
      />
    </>
  );
};

export default MainPage;
