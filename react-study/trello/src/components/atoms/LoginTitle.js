import React from 'react';
import classNames from 'classnames/bind';

import style from './style/LoginTitle.css';

const st = classNames.bind(style);

const LoginTitle = () => {
  const strongStyle = {
    textAlign: 'center',
    fontFamily: 'Nanum Myeongjo',
  };
  return (
    <div>
      <strong className={st('longInTitle')}>LogIn</strong>
    </div>
  );
};

export default React.memo(LoginTitle);
