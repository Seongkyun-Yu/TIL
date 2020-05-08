import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ButtonChild02 = ({ title, color }) => {
  const ButtonStyle = {
    border: 'none',
    width: 100,
    height: 30,
    background: color,
  };
  const handleButtonClick = () => {
    console.log('Button Child02 클릭!');
  };
  return (
    <button style={ButtonStyle} onClick={handleButtonClick}>
      {title}
    </button>
  );
};

ButtonChild02.propTypes = {
  title: PropTypes.number,
};

export default ButtonChild02;
