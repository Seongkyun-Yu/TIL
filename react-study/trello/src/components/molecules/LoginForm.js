import React, { useRef } from 'react';
import LoginTitle from '../atoms/LoginTitle';
import InputLoginInfo from '../atoms/InputLoginInfo';
import SubmitBtn from '../atoms/SubmitBtn';
import classNames from 'classnames/bind';
import style from './style/LoginForm.css';

const st = classNames.bind(style);

const LoginForm = ({ logIn }) => {
  const InputIDRef = useRef();
  const InputPassRef = useRef();

  return (
    <form className={st('logInform')} action="" name="id" method="post">
      <div className={st('logInFieldset')}>
        <LoginTitle />
        <InputLoginInfo type="text" ref={InputIDRef} />

        <InputLoginInfo
          type="password"
          ref={InputPassRef}
          placeholder="Password"
        />

        <SubmitBtn
          title="로그인 하기"
          logIn={logIn}
          tryId={InputIDRef}
          tryPass={InputPassRef}
        />
      </div>
    </form>
  );
};

export default LoginForm;
