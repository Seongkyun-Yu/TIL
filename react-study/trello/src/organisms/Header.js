import React from 'react';
import NeedLogin from '../atoms/NeedLogin';
import LogoutBtn from '../atoms/LogoutBtn';

const headerStyle = {
  width: '100%',
  height: '50px',
  backgroundColor: 'green',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const Header = ({ isLogin, loginId, logOut }) => {
  return (
    <header style={headerStyle}>
      {isLogin ? (
        <>
          <h2>{loginId}</h2>
          <LogoutBtn logOut={logOut} loginId={loginId} />
        </>
      ) : (
        <NeedLogin logOut={logOut} />
      )}
    </header>
  );
};

export default Header;
