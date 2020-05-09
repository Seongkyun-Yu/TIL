import React from 'react';

const inputStyle = {
  height: '10px',
  margin: '0px 10px',
};

const insertNewBoard = (e, state, setState) => {
  if (e.keyCode !== 13) return;

  const menuBoards = [...state.menuBoards, { title: e.target.value, menu: [] }];

  setState({ ...state, menuBoards });

  e.target.value = '';
};

const InputNewBoard = ({ state, setState }) => {
  return (
    <input
      style={inputStyle}
      onKeyUp={(e) => insertNewBoard(e, state, setState)}
      placeholder="보드 제목을 입력하세요"
    />
  );
};

export default InputNewBoard;
