import React from 'react';
import DeleteBoard from '../atoms/DeleteBoard';
import MenuLi from '../atoms/MenuLi';
import InputMenu from '../atoms/InputMenu';

const boardStyle = {
  display: 'flex',
};

const MenuBoard = ({ menuBoards, deleteBoard, state, setState }) => {
  return (
    <article style={boardStyle}>
      {menuBoards.map((menuBoard, i) => (
        <ul>
          <DeleteBoard
            title={menuBoard.title}
            index={i}
            deleteBoard={deleteBoard}
          />
          <MenuLi menu={menuBoard.menu} />
          <InputMenu index={i} state={state} setState={setState} />
        </ul>
      ))}
    </article>
  );
};

export default MenuBoard;
