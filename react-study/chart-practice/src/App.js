import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';
import { initCandle } from './Modules/coinReducer';
import { makeChartData } from './Utills/utill';

const App = () => {
  const coinState = useSelector((state) => state.Coin);
  const dispatch = useDispatch();
  console.log('사가로 넣은 상태값', coinState);

  const candles = makeChartData(
    coinState.selectedCoin,
    coinState[coinState.selectedCoin].candles,
  );

  useEffect(() => {
    dispatch(initCandle());
  }, []);

  return (
    <div className="App">
      <Chart
        options={candles.options}
        series={candles.series}
        type="candlestick"
        width={700}
      />
    </div>
  );
};

export default App;
