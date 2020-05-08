import React from 'react';
import LoginTitle from '../atoms/LoginTitle';
import LoginForm from '../molecules/LoginForm';

const logInStyle = {
  padding: 100,
  margin: 100,
  border: '1px solid #333',
};

const LoginSection = ({ logIn }) => {
  return (
    <section className="App" style={logInStyle}>
      <LoginTitle />
      <LoginForm logIn={logIn}></LoginForm>
    </section>
  );
};

export default LoginSection;
