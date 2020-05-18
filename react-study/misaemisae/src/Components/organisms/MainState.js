import React, { useContext } from 'react';
import { DustContext } from '../../Context/DustContext';
import './style/MainState.css';

const MainState = () => {
  const context = useContext(DustContext);
  const { state } = context;

  const firstLoc = state.dustData[0];
  console.log(new Date(firstLoc.MSRDT));

  return (
    <div className="mainContainer">
      <span>{firstLoc.MSRSTE_NM}</span>
      <span>{firstLoc.MSRDT}</span>
      <span>{firstLoc.IDEX_NM}</span>
    </div>
  );
};

export default MainState;
