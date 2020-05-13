/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';

import './style/GameBlock.css';

const GameBlock = ({ checkBoard, mark, row, col }) => {
  useEffect(() => {
    console.log('마크가 나타남');
    return () => {
      console.log('마크가 사라짐');
    };
  }, [mark]);
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
