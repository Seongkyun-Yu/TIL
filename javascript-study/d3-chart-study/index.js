// MockDate.set('2000-01-01', 0);
const data = fc.randomFinancial()(50);
console.log(data);

const yExtent = fc.extentLinear().accessors([(d) => d.high, (d) => d.low]);
console.log(yExtent(data));

const xExtent = fc.extentDate().accessors([(d) => d.date]);
console.log(xExtent(data));

const gridlines = fc.annotationSvgGridline();
console.log(gridlines);

const candlestick = fc.seriesSvgCandlestick();
console.log(candlestick);

const multi = fc.seriesSvgMulti().series([gridlines, candlestick]);
console.log(multi);

const chart = fc
  .chartCartesian(d3.scaleTime(), d3.scaleLinear())
  .yDomain(yExtent(data))
  .xDomain(xExtent(data))
  .svgPlotArea(multi);

// console.log(chart());

d3.select('#chart').datum(data).call(chart);
