import React from 'react';

const InputMenu = ({ index, inputMenu }) => {
  return <input onKeyUp={(e) => inputMenu(e, index)} />;
};

export default InputMenu;
