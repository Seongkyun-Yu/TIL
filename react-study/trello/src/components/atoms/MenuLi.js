import React from 'react';

const foodStyle = {
  listStyle: 'none',
};

let liKey = 100;

const MenuLi = ({ menu }) => {
  return (
    <>
      {menu.map((food) => {
        return (
          <li key={++liKey} style={foodStyle}>
            {food}
          </li>
        );
      })}
    </>
  );
};

export default MenuLi;
