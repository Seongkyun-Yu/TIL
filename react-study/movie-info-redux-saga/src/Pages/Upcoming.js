import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUpcomingMovie } from '../Modules/upcomingReducer';

const Upcoming = () => {
  const state = useSelector((state) => state.Upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMovie());
  }, [dispatch]);

  return <h1>{JSON.stringify(state)}</h1>;
};

export default Upcoming;
