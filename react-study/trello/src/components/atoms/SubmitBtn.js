import React from 'react';

const SubmitBtn = ({ title, logIn, tryId, tryPass }) => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();

        logIn(tryId, tryPass);
      }}
    >
      {title}
    </button>
  );
};

export default React.memo(SubmitBtn);
