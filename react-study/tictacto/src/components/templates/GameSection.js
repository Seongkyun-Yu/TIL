import React, { useState } from 'react';

import GameTitle from '../atoms/GameTitle';
import GameContainer from '../organisms/GameContainer';

import './style/GameSection.css';

const GameSection = () => {
  const [winner, setWinner] = useState('');
  return (
    <section className="GameSection">
      <GameTitle winner={winner} />
      <GameContainer winner={winner} setWinner={setWinner} />
    </section>
  );
};

export default GameSection;
