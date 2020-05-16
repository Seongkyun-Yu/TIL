import React from 'react';
import { initData } from '../Reducer/boardReducer';

const BoardContext = React.createContext({
  state: initData,
  dispatch: () => {},
});

export default BoardContext;
