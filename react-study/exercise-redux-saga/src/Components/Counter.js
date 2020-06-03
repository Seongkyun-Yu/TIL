import React from 'react';

const Counter = ({ count, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
