import React, { useMemo, useContext } from 'react';
import NewBoardTitle from '../atoms/NewBoardTitle';
import InputNewBoard from '../atoms/InputNewBoard';
import BoardContext from '../../Context/BoardContext';

const newBoardStyle = {
  display: 'flex',
  alignItems: 'center',
};

const NewBoardForm = () => {
  const context = useContext(BoardContext);
  const { state } = context;
  const count = useMemo(() => state.menuBoards.length, [state.menuBoards]);
  return (
    <div style={newBoardStyle}>
      <NewBoardTitle />
      <InputNewBoard />
      <strong>{count}개</strong>
    </div>
  );
};

export default NewBoardForm;
