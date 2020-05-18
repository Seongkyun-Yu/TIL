import React, { useEffect, useContext } from 'react';
import { DustContext } from '../../Context/DustContext';
import MainState from '../organisms/MainState';

const FineDust = () => {
  const context = useContext(DustContext);
  const { state } = context;

  const firstLoc = state.dustData[0];
  console.log(state.loading, firstLoc);

  return <div>{firstLoc ? <MainState /> : null}</div>;
};

export default FineDust;
