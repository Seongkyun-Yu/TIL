import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../Modules/counter';
import Counter from '../Components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
