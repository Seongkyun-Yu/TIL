import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../Modules/counter';
import Counter from '../Components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    ></Counter>
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  },
)(CounterContainer);
