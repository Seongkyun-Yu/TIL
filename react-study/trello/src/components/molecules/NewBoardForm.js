import React, { useMemo } from 'react';
import NewBoardTitle from '../atoms/NewBoardTitle';
import InputNewBoard from '../atoms/InputNewBoard';

const newBoardStyle = {
  display: 'flex',
  alignItems: 'center',
};

const NewBoardForm = ({ menuState, insertNewBoard }) => {
  const count = useMemo(() => menuState.length, [menuState]);
  return (
    <div style={newBoardStyle}>
      <NewBoardTitle />
      <InputNewBoard insertNewBoard={insertNewBoard} />
      <strong>{count}개</strong>
    </div>
  );
};

export default NewBoardForm;
