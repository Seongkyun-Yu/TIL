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
      <InputNewBoard state={state} setState={setState} />
    </div>
  );
};

export default NewBoardForm;
