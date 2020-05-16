import React, { useContext } from 'react';
import BoardContext from '../../Context/BoardContext';

const inputStyle = {
  height: '10px',
  margin: '0px 10px',
};

const InputNewBoard = () => {
  const context = useContext(BoardContext);
  const { insertNewBoard, inputChange } = context;

  return (
    <input
      style={inputStyle}
      name="board"
      onChange={inputChange}
      onKeyUp={insertNewBoard}
      placeholder="보드 제목을 입력하세요"
    />
  );
};

export default InputNewBoard;
