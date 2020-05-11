import React from 'react';
import classNames from 'classnames/bind';
import style from './style/InputLoginInfo.css';

const st = classNames.bind(style);

const InputLoginInfo = React.forwardRef((props, ref) => (
  <input
    className={st('InputLogin')}
    type={props.type}
    ref={ref}
    placeholder={props.type === 'text' ? 'ID' : 'Password'}
  />
));

export default InputLoginInfo;
