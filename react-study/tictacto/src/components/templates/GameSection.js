import React from 'react';

import GameTitle from '../atoms/GameTitle';
import GameContainer from '../organisms/GameContainer';

import './style/GameSection.css';

const GameSection = () => (
  <section className="GameSection">
    <GameTitle />
    <GameContainer />
  </section>
);

export default GameSection;
