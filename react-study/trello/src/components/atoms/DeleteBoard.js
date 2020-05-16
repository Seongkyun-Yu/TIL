import React, { useContext } from 'react';
import BoardContext from '../../Context/BoardContext';

const DeleteBoard = ({ title, index }) => {
  const context = useContext(BoardContext);
  const { deleteBoard } = context;

  return <h3 onClick={() => deleteBoard(index)}>* {title} 지우기</h3>;
};

export default DeleteBoard;
