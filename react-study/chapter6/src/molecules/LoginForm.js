import React, { Component } from 'react';

const LoginForm = ({ children }) => {
  const h1Style = {
    textAlign: 'center',
  };
  return (
    <form action="" name="id" method="post">
      <fieldset>{children}</fieldset>
    </form>
  );
};

export default LoginForm;
