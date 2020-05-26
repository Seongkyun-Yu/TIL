import React from 'react';
import movieApi from '../Api/movieApi';
import { useSelector, useDispatch } from 'react-redux';
import { success, error, loading } from '../Modules/Popular';
import Popular from '../Components/Pages/Popular';

const PopularContainer = () => {
  const { movie, errorState, errorMessage, loadingState } = useSelector(
    (state) => state.Popular,
  );

  const dispatch = useDispatch();

  const getPopMovie = async () => {
    const movie = await movieApi.getPopular();
    dispatch(success(movie));
  };

  const setError = (errorMessage) => error(errorMessage);

  const setloading = () => loading();

  return (
    <Popular
      movie={movie}
      errorState={errorState}
      errorMessage={errorMessage}
      loadingState={loadingState}
      getPopMovie={getPopMovie}
      setError={setError}
      setloading={setloading}
    />
  );
};
