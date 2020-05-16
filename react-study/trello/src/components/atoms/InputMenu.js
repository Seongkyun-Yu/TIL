import React, { useState, useContext } from 'react';
import BoardContext from '../../Context/BoardContext';

const InputMenu = ({ index }) => {
  const context = useContext(BoardContext);
  const { inputMenu } = context;

  const [menuState, setMenuState] = useState('');

  return (
    <input
      name="menu"
      onChange={(e) => setMenuState(e.target.value)}
      onKeyUp={(e) => inputMenu(e, menuState, setMenuState, index)}
    />
  );
};

export default InputMenu;
