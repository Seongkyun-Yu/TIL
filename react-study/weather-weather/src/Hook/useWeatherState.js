import { useReducer } from 'react';
import { getToday, getYesterday, getTime } from '../Util/util';
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

        const recent = weatherArray.filter(
          (weather) =>
            +getToday() <= +weather.fcstDate && +getTime() < weather.fcstTime,
        );

        let SKY = recent.filter((data) => data.category === 'SKY');
        SKY = SKY.map((data) => {
          return {
            date: data.fcstDate,
            time: data.fcstTime,
            value: data.fcstValue,
          };
        });

        let POP = recent.filter((data) => data.category === 'POP');
        POP = POP.map((data) => {
          return {
            date: data.fcstDate,
            time: data.fcstTime,
            value: data.fcstValue,
          };
        });

        let PTY = recent.filter((data) => data.category === 'PTY');
        PTY = PTY.map((data) => {
          return {
            date: data.fcstDate,
            time: data.fcstTime,
            value: data.fcstValue,
          };
        });

        let TMN = recent.filter((data) => data.category === 'TMN');
        TMN = TMN.map((data) => {
          return {
            date: data.fcstDate,
            time: data.fcstTime,
            value: data.fcstValue,
          };
        });

        let TMX = recent.filter((data) => data.category === 'TMX');
        TMX = TMX.map((data) => {
          return {
            date: data.fcstDate,
            time: data.fcstTime,
            value: data.fcstValue,
          };
        });

        let REH = recent.filter((data) => data.category === 'REH');
        REH = REH.map((data) => {
          return {
            date: data.fcstDate,
            time: data.fcstTime,
            value: data.fcstValue,
          };
        });

        let WSD = recent.filter((data) => data.category === 'WSD');
        WSD = WSD.map((data) => {
          return {
            date: data.fcstDate,
            time: data.fcstTime,
            value: data.fcstValue,
          };
        });

        dispatch({ type: 'SUCCESS', SKY, POP, PTY, TMN, TMX, REH, WSD });
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
