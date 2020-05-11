import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection = ({ logIn }) => {
  return (
    <section className="App">
      <LoginForm logIn={logIn}></LoginForm>
    </section>
  );
};

export default LoginSection;
