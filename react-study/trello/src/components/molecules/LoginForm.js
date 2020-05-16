import React from 'react';
import LoginTitle from '../atoms/LoginTitle';
import InputLoginInfo from '../atoms/InputLoginInfo';
import SubmitBtn from '../atoms/SubmitBtn';
import classNames from 'classnames/bind';
import style from './style/LoginForm.css';

const st = classNames.bind(style);

const LoginForm = () => {
  return (
    <form className={st('logInform')} action="" name="id" method="post">
      <div className={st('logInFieldset')}>
        <LoginTitle />
        <InputLoginInfo type="text" />
        <InputLoginInfo type="password" />
        <SubmitBtn title="로그인 하기" />
      </div>
    </form>
  );
};

export default React.memo(LoginForm);
