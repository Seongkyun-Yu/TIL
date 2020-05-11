import React from 'react';

const buttonStyle = {
  display: 'block',
  width: '80px',
  height: '30px',
};

const LogoutBtn = ({ logOut }) => {
  return (
    <button onClick={logOut} style={buttonStyle}>
      로그아웃
    </button>
  );
};

export default LogoutBtn;
