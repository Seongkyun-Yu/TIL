/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import BacksiesTitle from '../atoms/BacksiesTitle';
import BacksiesBtn from '../atoms/BacksiesBtn';

import GameContext from '../../Context/GameContext';

import './style/BacksiesBoard.css';

const BacksiesBoard = () => {
  const context = useContext(GameContext);
  const { state } = context;

  return (
    <div className="BacksiesBoard">
      <BacksiesTitle />
      {state.history.map((_, num) => (
        <BacksiesBtn num={num} />
      ))}
    </div>
  );
};

export default BacksiesBoard;
