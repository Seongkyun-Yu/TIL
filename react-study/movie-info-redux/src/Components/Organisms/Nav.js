import React from 'react';
import './style/Nav.css';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'red',
};

const Nav = () => {
  return (
    <ul className="NavContainer">
      <li key={1}>
        <NavLink className="NavLink" exact to="/" activeStyle={activeStyle}>
          POPULAR
        </NavLink>
      </li>
      <li key={2}>
        <NavLink className="NavLink" to="/Recent" activeStyle={activeStyle}>
          UPCOMMING
        </NavLink>
      </li>
      <li key={3}>
        <NavLink className="NavLink" to="/Search" activeStyle={activeStyle}>
          SEARCH
        </NavLink>
      </li>
      <li key={4}>
        <NavLink className="NavLink" to="/About" activeStyle={activeStyle}>
          ABOUT
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
