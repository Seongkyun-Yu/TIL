import React from 'react';

const GoBackBtn = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  return <button onClick={goBack}>BACK</button>;
};

export default GoBackBtn;
