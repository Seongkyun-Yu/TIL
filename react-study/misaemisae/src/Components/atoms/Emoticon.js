import React, { useContext } from 'react';
import { DustContext } from '../../Context/DustContext';
// import classnames from 'classnames/bind';
// import style from './style/Emoticon.css';
import './style/Emoticon.css';

// const st = classnames.bind(style);

const Emoticon = () => {
  const context = useContext(DustContext);
  const { state, dustQuality } = context;

  const nowLoc = state.dustData[state.locIndex];
  const dustQual = dustQuality(nowLoc.PM25);

  return <i class={dustQual.className}></i>;
};

export default Emoticon;
