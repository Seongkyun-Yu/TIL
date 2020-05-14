import React, { useState, useRef } from 'react';
import LoginTitle from '../atoms/LoginTitle';
import InputLoginInfo from '../atoms/InputLoginInfo';
import SubmitBtn from '../atoms/SubmitBtn';
import classNames from 'classnames/bind';
import style from './style/LoginForm.css';

const st = classNames.bind(style);

const LoginForm = ({ logIn }) => {
  // const InputIDRef = useRef();
  // const InputPassRef = useRef();

  const [InputIdState, setInputIdState] = useState('');
  const [InputPassState, setInputPassState] = useState('');

  return (
    <form className={st('logInform')} action="" name="id" method="post">
      <div className={st('logInFieldset')}>
        <LoginTitle />
        <InputLoginInfo
          type="text"
          // ref={InputIDRef}
          setInputState={setInputIdState}
        />

        <InputLoginInfo
          type="password"
          // ref={InputPassRef}
          setInputState={setInputPassState}
        />

        <SubmitBtn
          title="로그인 하기"
          logIn={logIn}
          tryId={InputIdState}
          tryPass={InputPassState}
        />
      </div>
    </form>
  );
};

export default React.memo(LoginForm);
