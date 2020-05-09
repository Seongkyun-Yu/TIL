import React from 'react';

const inputMenu = (e, index, state, setState) => {
  if (e.keyCode !== 13) return;

  const menuBoards = state.menuBoards.map((Board, i) => {
    if (index === i) {
      Board.menu = [...Board.menu, e.target.value];
      return Board;
    }

    return Board;
  });

  setState({ ...state, menuBoards });

  e.target.value = '';
};

const InputMenu = ({ index, state, setState }) => {
  return <input onKeyUp={(e) => inputMenu(e, index, state, setState)} />;
};

export default InputMenu;
