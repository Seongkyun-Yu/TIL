import React from 'react';

const SubmitBtn = ({ title, logIn, tryId, tryPass }) => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();

        logIn(tryId.current.value, tryPass.current.value);
      }}
    >
      {title}
    </button>
  );
};

export default SubmitBtn;
