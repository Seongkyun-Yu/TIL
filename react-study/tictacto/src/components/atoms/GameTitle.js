import React from 'react';
import './style/GameTitle.css';

const GameTitle = ({ winner }) => (
  <strong className="GameTitle">
    {winner ? `${winner}승리!` : 'tic-tac-toe 진행중'}
  </strong>
);
export default GameTitle;
