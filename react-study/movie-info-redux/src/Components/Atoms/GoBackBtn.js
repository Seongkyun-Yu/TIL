import React from 'react';
import './style/GoBackBtn.css';

const GoBackBtn = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  return (
    <button className="goBack" onClick={goBack}>
      BACK
    </button>
  );
};

export default GoBackBtn;
