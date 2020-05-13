/* eslint-disable object-curly-newline */
import React from 'react';

import './style/GameBlock.css';

const GameBlock = ({ checkBoard, mark, row, col }) => (
  <li
    className="GameBlock"
    onClick={() => checkBoard(row, col)}
    key={row * 10 + col}
  >
    {mark}
  </li>
);

export default GameBlock;
