import React from 'react';

const foodStyle = {
  listStyle: 'none',
};

const MenuLi = ({ menu }) => {
  return (
    <>
      {menu.map((food, i) => (
        <li key={i.toString()} style={foodStyle}>
          {food}
        </li>
      ))}
    </>
  );
};

export default MenuLi;
