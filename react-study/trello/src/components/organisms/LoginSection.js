import React, { useContext } from 'react';
import LoginForm from '../molecules/LoginForm';
import BoardContext from '../../Context/BoardContext';

const LoginSection = () => {
  const context = useContext(BoardContext);
  const { logIn } = context;
  return (
    <section className="App">
      <LoginForm logIn={logIn}></LoginForm>
    </section>
  );
};

export default LoginSection;
