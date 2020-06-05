import React from 'react';
import { NavLink } from 'react-router-dom';

import './style/Navigation.scss';

const Navigation = () => {
  return (
    <ul className="NavContainer">
      <li key={1}>
        <NavLink activeClassName="activeNav" exact to="/">
          POPULAR
        </NavLink>
      </li>
      <li key={2}>
        <NavLink activeClassName="activeNav" to="/Upcoming">
          UPCOMING
        </NavLink>
      </li>
      <li key={3}>
        <NavLink activeClassName="activeNav" to="/Search">
          SEARCH
        </NavLink>
      </li>
      <li key={4}>
        <NavLink activeClassName="activeNav" to="/About">
          ABOUT
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
