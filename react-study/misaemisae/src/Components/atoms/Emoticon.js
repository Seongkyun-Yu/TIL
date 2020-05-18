import React, { useContext } from 'react';
import { DustContext } from '../../Context/DustContext';

import './style/Emoticon.css';

const Emoticon = () => {
  const context = useContext(DustContext);
  const { state } = context;

  const nowLoc = state.dustData[state.locIndex];

  return <i class="far fa-smile"></i>;
};

export default Emoticon;
