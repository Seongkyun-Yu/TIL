import React from 'react';
import classNames from 'classnames/bind';
import useData from './Hook/useData';
import PhoneContext from './context/PhoneContext';
import List from './List';
import style from './App.css';

const st = classNames.bind(style);

const Book = () => {
  const [userData, updateInputValue, addUserData, deleteUserData] = useData();

  const data = {
    userData,
    updateInputValue,
    addUserData,
    deleteUserData,
  };

  return (
    <PhoneContext.Provider value={data}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
      <section className="addressContainer">
        <div className="addrInfo">
          <div className="scrollHidden">
            <List />
          </div>
        </div>
        <div className="addrAdd">
          <input
            className="InputuserData"
            onChange={updateInputValue}
            name="name"
            value={userData.inputName}
          />
          <input
            className="InputuserData"
            onChange={updateInputValue}
            name="phone"
            value={userData.inputPhone}
          />
          <button onClick={addUserData}>번호등록</button>
        </div>
      </section>
    </PhoneContext.Provider>
  );
};

export default Book;
