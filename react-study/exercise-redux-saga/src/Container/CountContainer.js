import React from 'react';
import Counter from '../Components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../Modules/counter';

const CountContainer = () => {
  const count = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CountContainer;
