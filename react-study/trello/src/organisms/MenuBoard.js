import React from 'react';
import DeleteBoard from '../atoms/DeleteBoard';
import MenuLi from '../atoms/MenuLi';
import InputMenu from '../atoms/InputMenu';
import NewBoardForm from '../molecules/NewBoardForm';

const boardStyle = {
  display: 'flex',
};

const MenuBoard = ({ menuBoards, deleteBoard, state, setState }) => {
  return (
    <>
      <NewBoardForm state={state} setState={setState} />
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
    </>
  );
};

export default MenuBoard;
