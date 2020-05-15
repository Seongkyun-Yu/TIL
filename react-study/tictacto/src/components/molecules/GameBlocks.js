import React, { useContext } from 'react';
import GameBlock from '../atoms/GameBlock';

import GameContext from '../../Context/GameContext';

import './style/GameBlocks.css';

const GameBlocks = () => {
  const context = useContext(GameContext);
  const { state } = context;

  return (
    <ul className="GameBlocks">
      {state.nowGame.map((arr, row) =>
        arr.map((mark, col) => <GameBlock mark={mark} row={row} col={col} />),
      )}
    </ul>
  );
};

export default GameBlocks;
