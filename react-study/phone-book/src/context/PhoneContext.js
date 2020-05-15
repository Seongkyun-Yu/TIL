import React from 'react';
import { initUserData } from '../reducer/phoneReducer';

const PhoneContext = React.createContext({
  state: initUserData,
  dispatch: () => {},
});

export default PhoneContext;
