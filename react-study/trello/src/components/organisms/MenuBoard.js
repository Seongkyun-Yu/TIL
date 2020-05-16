import React, { useContext } from 'react';
import DeleteBoard from '../atoms/DeleteBoard';
import MenuLi from '../atoms/MenuLi';
import InputMenu from '../atoms/InputMenu';
import NewBoardForm from '../molecules/NewBoardForm';
import BoardContext from '../../Context/BoardContext';

const boardStyle = {
  display: 'flex',
};

let ulKey = 0;

const MenuBoard = () => {
  const context = useContext(BoardContext);
  const { state } = context;

  return (
    <>
      <NewBoardForm />
      <article style={boardStyle}>
        {state.menuBoards.map((menuBoard, i) => (
          <ul key={++ulKey}>
            <DeleteBoard title={menuBoard.title} index={i} />
            <MenuLi menu={menuBoard.menu} />
            <InputMenu index={i} />
          </ul>
        ))}
      </article>
    </>
  );
};

export default MenuBoard;
