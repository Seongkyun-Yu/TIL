import React, { useContext } from 'react';
import { DustContext } from '../../Context/DustContext';
import Emoticon from '../atoms/Emoticon';

import './style/MainState.css';

const MainState = () => {
  const context = useContext(DustContext);
  const { state } = context;

  const nowLoc = state.dustData[state.locIndex];

  return (
    <div className="mainContainer">
      <span>{nowLoc.MSRSTE_NM}</span>
      <span>{nowLoc.MSRDT}</span>
      <Emoticon />
      <span>{nowLoc.IDEX_NM}</span>
    </div>
  );
};

export default MainState;
