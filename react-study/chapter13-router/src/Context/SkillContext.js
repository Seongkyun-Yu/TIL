import React, { useReduce, createContext } from 'react';
import { initData, reducer } from '../Reducer/skillReducer';

export const SkillContext = createContext(null);

export const SkillContextProvider = ({ children }) => {
  // const [state, dispatch] = useReduce(reducer, initData);

  return (
    <SkillContext.Provider value={initData}>{children}</SkillContext.Provider>
  );
};
