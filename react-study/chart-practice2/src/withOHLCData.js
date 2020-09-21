import { tsvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';
import React, { useState, useEffect } from 'react';

const parseDate = timeParse('%Y-%m-%d');

const parseData = () => {
  return (d) => {
    const date = parseDate(d.date);
    if (date === null) {
      d.date = new Date(Number(d.date));
    } else {
      d.date = new Date(date);
    }

    for (const key in d) {
      if (key !== 'date' && Object.prototype.hasOwnProperty.call(d, key)) {
        d[key] = +d[key];
      }
    }

    return d;
  };
};

const withOHLCData = (dataSet = 'DAILY') => (OriginalComponent) => (props) => {
  // React.useState

  const [OHLC, setOHLC] = useState({
    message: `Loading ${dataSet} data...`,
  });

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/reactivemarkets/react-financial-charts/master/packages/stories/src/data/${dataSet}.tsv`,
    )
      .then((response) => response.text())
      .then((data) => tsvParse(data, parseData()))
      .then((data) => {
        setOHLC({
          message: 'success',
          data,
        });
      })
      .catch(() => {
        setOHLC({
          message: `Failed to fetch data.`,
        });
      });
  }, []);

  return !OHLC.data ? (
    <div className="center">{OHLC.message}</div>
  ) : (
    <OriginalComponent {...props} data={OHLC.data} />
  );
};

export { withOHLCData };
