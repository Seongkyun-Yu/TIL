import moment from 'moment-timezone';

const timestampToDatetime = (timeType, timeCount, timestamp) => {
  switch (timeType) {
    case 'minute':
    case 'minutes':
      return (
        moment(timestamp)
          .minute(
            Math.floor(moment(timestamp).minute() / timeCount) * timeCount,
          )
          .second(0)
          .tz('Asia/Seoul')
          // .format('YY-MM-DD HH:mm');
          .format()
      );
    case 'hour':
    case 'hours':
      return moment(timestamp)
        .hour(Math.floor(moment(timestamp).hour() / timeCount) * timeCount)
        .minute(0)
        .second(0)
        .tz('Asia/Seoul')
        .format('YY-MM-DD HH:mm');
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
        type: 'candlestick',
        height: 350,
        animations: {
          enabled: false,
          // easing: 'easeinout',
          // speed: 800,
          // animateGradually: {
          //     enabled: true,
          //     delay: 150
          // },
          // dynamicAnimation: {
          //     enabled: true,
          //     speed: 350
          // }
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleXaxis: false,
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4,
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
      title: {
        text: market,
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
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
