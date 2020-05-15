import React, { useContext } from 'react';
import GameContext from '../../Context/GameContext';

const BacksiesBtn = ({ num }) => {
  const context = useContext(GameContext);
  const { backsies } = context;
  return (
    <button key={num} type="button" onClick={() => backsies(num)}>
      {num}번째 수로 돌아가기
    </button>
  );
};

export default BacksiesBtn;
