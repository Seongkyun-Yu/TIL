import React from 'react';

const Phone = ({ phones, onAddUser }) => {
  return (
    <ul>
      {phones.map((phone) => {
        return <li></li>;
      })}
    </ul>
  );
};
