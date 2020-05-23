import React from 'react';
import { getToday } from './Util/util';
import weatherApi from './Api/weatherApi';

function App() {
  const get = async () => {
    console.log(getToday().length);

    const res = await weatherApi.getWeather(getToday(), 1, 1);

    console.log(res.data.response.body.items.item[0]);
  };

  get();

  return <div>{getToday()}</div>;
}

export default App;
