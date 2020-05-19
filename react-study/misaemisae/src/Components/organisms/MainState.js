import React, { useContext } from 'react';
import { DustContext } from '../../Context/DustContext';
import Emoticon from '../atoms/Emoticon';

import './style/MainState.css';

const MainState = () => {
  const context = useContext(DustContext);
  const { state, dustQuality } = context;

  const nowLoc = state.dustData[state.locIndex];
  const dustQual = dustQuality(nowLoc.PM25);

  return (
    <div className="mainContainer">
      <span>{nowLoc.MSRSTE_NM}</span>
      <span>{nowLoc.MSRDT}</span>
      <Emoticon />
      <span>{dustQual.state}</span>
    </div>
  );
};

export default MainState;
