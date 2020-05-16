import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import style from './style/InputLoginInfo.css';
import BoardContext from '../../Context/BoardContext';

const st = classNames.bind(style);

// const InputLoginInfo = React.forwardRef((props, ref) => (
//   <input
//     className={st('InputLogin')}
//     type={props.type}
//     ref={ref}
//     placeholder={props.type === 'text' ? 'ID' : 'Password'}
//   />
// ));

const InputLoginInfo = ({ type }) => {
  const context = useContext(BoardContext);
  const { inputChange } = context;
  return (
    <input
      className={st('InputLogin')}
      type={type}
      name={type === 'text' ? 'id' : 'pass'}
      onChange={inputChange}
      placeholder={type === 'text' ? 'ID' : 'Password'}
    />
  );
};

export default React.memo(InputLoginInfo);
