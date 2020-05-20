import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li key={1}>
        <NavLink to="/">인기순위</NavLink>
      </li>
      <li key={2}>
        <NavLink to="/Recent">최신순</NavLink>
      </li>
      <li key={3}>
        <NavLink to="/Search">검색</NavLink>
      </li>
      <li key={4}>
        <NavLink to="/About">어바웃</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
