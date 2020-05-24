/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '../Context/WeatherContext';

const Weather = () => {
  const context = useContext(WeatherContext);
  const { weatherState, fetchWeather, locationState, fetchLoaction } = context;

  console.log(locationState);

  if (!locationState.loading) fetchWeather(locationState.nx, locationState.ny);

  // fetchWeather(locationState.latitude, locationState.longitude);

  // const getPosition = (options) => {
  //   return new Promise(function (resolve, reject) {
  //     navigator.geolocation.getCurrentPosition(resolve, reject, options);
  //   });
  // };

  // const get = async () => {
  //   const loc = await getPosition();
  //   console.log('내장 lati', loc);

  //   const getDay = +new Date().getHours() < 5 ? getYesterday() : getToday();
  //   const res = await weatherApi.getWeather(getDay, 1, 1);

  //   console.log(res);

  //   console.log(dfs_xy_conv('toXY', '37.544540', '127.055976'));
  // };

  // get();

  // const getlco = async () => {
  //   const res = await mapApi.getLoc('37.3978998', '126.72805869999999');
  //   console.log('맵', res);
  //   const addr =
  //     res.data.results[0].region.area2.name +
  //     ' ' +
  //     res.data.results[0].region.area3.name;

  //   console.log(addr);
  // };

  // getlco();

  // useEffect(() => {
  //   fetchWeather(locationState.nx, locationState.ny);
  // }, []);

  return <div>hi</div>;
};

export default React.memo(Weather);
