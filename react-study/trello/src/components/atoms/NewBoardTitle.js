import React from 'react';

const titleStyle = {
  display: 'block',
  backgroundColor: 'skyblue',
  width: '150px',
  height: '40px',
  lineHeight: '40px',
  borderRadius: '20px',
  textAlign: 'center',
};

const NewBoardTitle = () => {
  return <strong style={titleStyle}>New Board</strong>;
};

export default NewBoardTitle;
