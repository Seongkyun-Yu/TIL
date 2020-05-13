/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React from 'react';
import GameBlock from '../atoms/GameBlock';

import './style/GameBlocks.css';

const GameBlocks = ({ nowGameState, checkBoard }) => {
  return (
    <ul className="GameBlocks">
      {nowGameState.map((arr, row) =>
        arr.map((mark, col) => (
          <GameBlock checkBoard={checkBoard} mark={mark} row={row} col={col} />
        )),
      )}
    </ul>
  );
};

export default GameBlocks;
