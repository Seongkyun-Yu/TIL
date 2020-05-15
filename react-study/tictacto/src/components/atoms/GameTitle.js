import React, { useContext } from 'react';
import './style/GameTitle.css';
import GameContext from '../../Context/GameContext';

const GameTitle = () => {
  const context = useContext(GameContext);
  const { state } = context;
  return (
    <strong className="GameTitle">
      {state.winner ? `${state.winner}승리!` : 'tic-tac-toe 진행중'}
    </strong>
  );
};
export default GameTitle;
