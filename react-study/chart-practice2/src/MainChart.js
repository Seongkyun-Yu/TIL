import React, { useState, useEffect } from 'react';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  LineSeries,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize,
} from 'react-financial-charts';
import { tsvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';
import { withOHLCData } from './withOHLCData';

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

const MainChart = ({
  data: initialData,
  height,
  dateTimeFormat = '%d %b',
  width,
  ratio,
}) => {
  const margin = { left: 0, right: 48, top: 0, bottom: 24 };
  const pricesDisplayFormat = format('.2f');
  const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (d) => d.date,
  );

  const ema12 = ema()
    .id(1)
    .options({ windowSize: 12 })
    .merge((d, c) => {
      d.ema12 = c;
    })
    .accessor((d) => d.ema12);

  const ema26 = ema()
    .id(2)
    .options({ windowSize: 26 })
    .merge((d, c) => {
      d.ema26 = c;
    })
    .accessor((d) => d.ema26);

  const elder = elderRay();

  // const calculatedData = elder(ema26(ema12(initialData)));

  // const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
  //   calculatedData,
  // );

  return <div>Test Component!</div>;
};

export default withOHLCData()(
  withSize({ style: { minHeight: 600 } })(withDeviceRatio()(MainChart)),
);
