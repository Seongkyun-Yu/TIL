import React, { useEffect, useContext } from 'react';
import LoginSection from '../organisms/LoginSection';
import BoardContext from '../../Context/BoardContext';

const LoginPage = () => {
  const context = useContext(BoardContext);
  const { state } = context;

  useEffect(() => {
    return () => alert('login hi');
  }, [state.isLogin]);

  return <LoginSection />;
};

export default LoginPage;
