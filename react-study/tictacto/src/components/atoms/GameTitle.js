import React from 'react';

const GameTitle = ({ winner }) => (
  <strong>{winner ? `${winner}승리!` : 'tic-tac-tok 진행중'}</strong>
);
export default GameTitle;
