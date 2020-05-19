import React, { useReducer, createContext } from 'react';
import { initData, reducer } from '../Reducer/skillReducer';

export const SkillContext = createContext(null);

export const SkillContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initData);

  return (
    <SkillContext.Provider value={state}>{children}</SkillContext.Provider>
  );
};
