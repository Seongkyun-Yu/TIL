import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from "react-apexcharts";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import moment from "moment-timezone";

import { upbitApi } from "./Api/upbitApi";
import { initCandle } from "./Modules/coinReducer";
import { makeChartData } from "./Utills/utill";

// console.log();
const getTime = (timeType, timeCount, timestamp) => {
  switch (timeType) {
    case "minute":
    case "minutes":
      return moment(timestamp)
        .minute(Math.floor(moment(timestamp).minute() / timeCount) * timeCount)
        .second(0)
        .tz("Asia/Seoul")
        .format("YY-MM-DD HH:mm");
    case "hour":
    case "hours":
      return moment(timestamp)
        .hour(Math.floor(moment(timestamp).hour() / timeCount) * timeCount)
        .minute(0)
        .second(0)
        .tz("Asia/Seoul")
        .format("YY-MM-DD HH:mm");
    default:
      return undefined;
  }
};

const App = () => {
  const coinState = useSelector((state) => state.Coin);
  const dispatch = useDispatch();
  console.log("사가로 넣은 상태값", coinState);

  const candles = makeChartData(
    coinState.selectedCoin,
    coinState[coinState.selectedCoin].candles
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
        // height={320}
        // animations={{
        //   chart: {
        //     animations: {
        //       enabled: true,
        //       easing: "easeinout",
        //       speed: 800,
        //       animateGradually: {
        //         enabled: true,
        //         delay: 150,
        //       },
        //       dynamicAnimation: {
        //         enabled: true,
        //         speed: 350,
        //       },
        //     },
        //   },
        // }}
      />
    </div>
  );
};

export default App;
