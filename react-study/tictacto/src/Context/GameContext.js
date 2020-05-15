import React from 'react';
import { initData } from '../Reducer/gameReducer';

const GameContext = React.createContext({
  state: initData,
  dispatch: () => {},
});

export default GameContext;
