import moment from "moment-timezone";

const timestampToDatetime = (timeType, timeCount, timestamp) => {
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

const makeChartData = (market, candles) => {
  const newData = candles.map((candle) => {
    return {
      x: candle.datetime,
      y: [
        candle.openPrice,
        candle.highPrice,
        candle.lowPrice,
        candle.closePrice,
      ],
    };
  });
  return {
    series: [
      {
        data: newData,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: market,
        align: "left",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };
};

export { timestampToDatetime, makeChartData };
