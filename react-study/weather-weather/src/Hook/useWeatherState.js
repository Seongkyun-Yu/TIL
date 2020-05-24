import { useReducer } from 'react';
import { getToday, getYesterday } from '../Util/util';
import { weatherApi } from '../Api/weatherApi';
import { weatherInit, weatherReducer } from '../Reducer/weatherReducer';

const useWeatherState = () => {
  const [state, dispatch] = useReducer(weatherReducer, weatherInit);

  const fetchWeather = async (latitude, longitude) => {
    const wantDay = new Date().getHours() < 5 ? getYesterday() : getToday();

    try {
      const res = await weatherApi.getWeather(wantDay, latitude, longitude);

      if (res.status === 200) {
        const weatherArray = res.data.response.body.items.item;

        let day1 = weatherArray.filter(
          (weather) => +wantDay === +weather.fcstDate,
        );
        console.log('첫날', day1);

        let day2 = weatherArray.filter(
          (weather) => +wantDay + 1 === +weather.fcstDate,
        );
        console.log(day2);

        day2 = day2.slice(day2.length - 10, day2.length);
        console.log(day2);
      } else {
        dispatch({ type: 'ERROR', message: res.statusText });
      }
    } catch (error) {
      dispatch({ type: 'ERROR', message: error.message });
    }
  };

  return [state, fetchWeather];
};

export default useWeatherState;
