import React, { useEffect, useContext } from 'react';
import { DustContext } from '../../Context/DustContext';
import MainState from '../organisms/MainState';
import './style/FineDust.css';

const FineDust = () => {
  const context = useContext(DustContext);
  const { state } = context;

  const firstLoc = state.dustData[0];

  return <div className="dusContainer">{firstLoc ? <MainState /> : null}</div>;
};

export default FineDust;
