import React, { useContext } from 'react';
import PhoneContext from './context/PhoneContext';
import classNames from 'classnames/bind';
import style from './style/List.css';

const st = classNames.bind(style);

const List = () => {
  const context = useContext(PhoneContext);
  const { userData, deleteUserData } = context;

  return (
    <ul className={st('ulUserDataContainer')}>
      {userData.list.map((user, i) => {
        return (
          <li key={i} className="liUserData">
            <i className={st('fas fa-user')} />
            <div className="userDataContainer">
              <span className="userData">이름: {user.name}</span>
              <span className="userData">전화번호: {user.phone} </span>
            </div>
            <i
              className={st('deleteUserData', 'far fa-times-circle')}
              onClick={() => deleteUserData(i)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(List);
