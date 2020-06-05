import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUpcomingMovie } from '../Modules/upcomingReducer';
import UpcomingTemplate from '../Components/Templates/UpcomingTemplate';

const Upcoming = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMovie());
  }, [dispatch]);

  return <UpcomingTemplate />;
};

export default Upcoming;
