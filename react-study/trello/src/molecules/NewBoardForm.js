import React from 'react';
import NewBoardTitle from '../atoms/NewBoardTitle';
import InputNewBoard from '../atoms/InputNewBoard';

const newBoardStyle = {
  display: 'flex',
  alignItems: 'center',
};

const NewBoardForm = ({ state, setState }) => {
  return (
    <div style={newBoardStyle}>
      <NewBoardTitle />
      <InputNewBoard />
    </div>
  );
};

export default NewBoardForm;
