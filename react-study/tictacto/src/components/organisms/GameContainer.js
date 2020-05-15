import React from 'react';

import GameBlocks from '../molecules/GameBlocks';
import BacksiesBoard from '../molecules/BacksiesBoard';

import './style/GameContainer.css';

const GameContainer = () => (
  <div className="GameContainer">
    <GameBlocks />
    <BacksiesBoard />
  </div>
);

export default GameContainer;
