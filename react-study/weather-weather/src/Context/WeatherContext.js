import React, { createContext } from 'react';
import useWeatherState from '../Hook/useWeatherState';
import useLocationState from '../Hook/useLocationState';

const WeatherContext = createContext(null);

const WeatherContextProvider = ({ children }) => {
  const [locationState, fetchLocation] = useLocationState();
  const [weatherState, fetchWeather] = useWeatherState();

  const data = {
    weatherState,
    fetchWeather,
    locationState,
    fetchLocation,
  };

  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
