import React, { useContext } from 'react';
import BoardContext from '../../Context/BoardContext';

const SubmitBtn = ({ title }) => {
  const context = useContext(BoardContext);
  const { logIn } = context;

  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        logIn();
      }}
    >
      {title}
    </button>
  );
};

export default React.memo(SubmitBtn);
