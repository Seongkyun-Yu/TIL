import React from 'react';

const DeleteBoard = ({ title, index, deleteBoard }) => {
  return <h3 onClick={() => deleteBoard(index)}>* {title} 지우기</h3>;
};

export default DeleteBoard;
