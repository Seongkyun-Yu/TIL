import React, { createContext } from 'react';
import useFDData from '../Hook/useFDData';
import { initDustData } from '../Reducer/fineDustReducer';

const DustContext = createContext(initDustData);

const DustProvider = ({ children }) => {
  const [state, fetchDustData] = useFDData();

  const data = {
    state,
    fetchDustData,
  };

  return <DustContext.Provider value={data}>{children}</DustContext.Provider>;
};

export { DustContext, DustProvider };
