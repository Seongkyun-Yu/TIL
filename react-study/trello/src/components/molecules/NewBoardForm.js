import React from 'react';
import NewBoardTitle from '../atoms/NewBoardTitle';
import InputNewBoard from '../atoms/InputNewBoard';

const newBoardStyle = {
  display: 'flex',
  alignItems: 'center',
};

const NewBoardForm = ({ insertNewBoard }) => {
  return (
    <div style={newBoardStyle}>
      <NewBoardTitle />
      <InputNewBoard insertNewBoard={insertNewBoard} />
    </div>
  );
};

export default NewBoardForm;
