import React from 'react';
import GameBlock from '../atoms/GameBlock';

import './style/GameBlocks.css';

const GameBlocks = ({ nowGameState, checkBoard }) => (
  <ul className="GameBlocks">
    {nowGameState.map((arr, row) =>
      arr.map((mark, col) => (
        <GameBlock checkBoard={checkBoard} mark={mark} row={row} col={col} />
      )),
    )}
  </ul>
);

export default GameBlocks;
