import React, { useRef } from 'react';
import InputTitle from '../atoms/InputTitle';
import InputLoginInfo from '../atoms/InputLoginInfo';
import SubmitBtn from '../atoms/SubmitBtn';

const LoginForm = ({ logIn }) => {
  const InputIDRef = useRef();
  const InputPassRef = useRef();

  return (
    <form action="" name="id" method="post">
      <fieldset>
        <InputTitle title="ID:" />
        <br />
        <InputLoginInfo type="text" ref={InputIDRef} />
        <br />
        <InputTitle title="PASS:" />
        <br />
        <InputLoginInfo type="password" ref={InputPassRef} />
        <br />
        <SubmitBtn
          title="로그인 하기"
          logIn={logIn}
          tryId={InputIDRef}
          tryPass={InputPassRef}
        />
      </fieldset>
    </form>
  );
};

export default LoginForm;
