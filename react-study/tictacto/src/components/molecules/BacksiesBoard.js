/* eslint-disable react/prop-types */
import React from 'react';
import BacksiesTitle from '../atoms/BacksiesTitle';
import BacksiesBtn from '../atoms/BacksiesBtn';

import './style/BacksiesBoard.css';

const BacksiesBoard = ({ historyState, backsies }) => (
  <div className="BacksiesBoard">
    <BacksiesTitle />
    {historyState.map((_, num) => (
      <BacksiesBtn backsies={backsies} num={num} />
    ))}
  </div>
);

export default BacksiesBoard;
