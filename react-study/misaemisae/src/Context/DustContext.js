import React, { createContext } from 'react';
import useFDData from '../Hook/useFDData';
import { initDustData } from '../Reducer/fineDustReducer';

const DustContext = createContext(initDustData);

const DustProvider = ({ children }) => {
  const [state, fetchDustData, dustQuality] = useFDData();

  const data = {
    state,
    fetchDustData,
    dustQuality,
  };

  return <DustContext.Provider value={data}>{children}</DustContext.Provider>;
};

export { DustContext, DustProvider };
