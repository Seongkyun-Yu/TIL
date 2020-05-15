/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import GameContext from '../../Context/GameContext';

import './style/GameBlock.css';

const GameBlock = ({ mark, row, col }) => {
  const context = useContext(GameContext);
  const { checkBoard } = context;

  return (
    <li
      className="GameBlock"
      onClick={() => checkBoard(row, col)}
      key={row * 10 + col}
    >
      {mark}
    </li>
  );
};

export default GameBlock;
