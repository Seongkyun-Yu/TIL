import React from 'react';

const inputStyle = {
  height: '10px',
  margin: '0px 10px',
};

const InputNewBoard = ({ insertNewBoard }) => {
  return (
    <input
      style={inputStyle}
      onKeyUp={(e) => insertNewBoard(e)}
      placeholder="보드 제목을 입력하세요"
    />
  );
};

export default InputNewBoard;
