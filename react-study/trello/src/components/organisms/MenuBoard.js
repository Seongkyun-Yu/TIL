import React from 'react';
import DeleteBoard from '../atoms/DeleteBoard';
import MenuLi from '../atoms/MenuLi';
import InputMenu from '../atoms/InputMenu';
import NewBoardForm from '../molecules/NewBoardForm';

const boardStyle = {
  display: 'flex',
};

let ulKey = 0;

const MenuBoard = ({ menuState, deleteBoard, insertNewBoard, inputMenu }) => {
  return (
    <>
      <NewBoardForm menuState={menuState} insertNewBoard={insertNewBoard} />
      <article style={boardStyle}>
        {menuState.map((menuBoard, i) => (
          <ul key={++ulKey}>
            <DeleteBoard
              title={menuBoard.title}
              index={i}
              deleteBoard={deleteBoard}
            />
            <MenuLi menu={menuBoard.menu} />
            <InputMenu index={i} inputMenu={inputMenu} />
          </ul>
        ))}
      </article>
    </>
  );
};

export default MenuBoard;
