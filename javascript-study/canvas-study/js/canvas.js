const e = document.getElementById('canvas1');
const c = e.getContext('2d');
const candleShadowWidth = 1;
const candleBodyWidth = 15;

// -------- 4 corners begin ----------
function reverseY(x, y) {
  y = e.height - 1 - y; // y=0 becomes the lower left corner
  c.fillRect(x, y, 1, 1);
}
function normal(x, y) {
  c.fillRect(x, y, 1, 1);
}
function show4Corners() {
  reverseY(0, e.height - 1);
  reverseY(e.width - 1, e.height - 1);
  normal(0, e.height - 1);
  normal(e.width - 1, e.height - 1);
}
// show4Corners();
// -------- 4 corners end ----------

function Candle(id, timeframe, O, H, L, C) {
  this.id = id;
  this.timeframe = timeframe;
  this.O = O;
  this.H = H;
  this.L = L;
  this.C = C;
}

function mapY(dataToMap, dataLowMin, dataHighMax, yCanvasMin, yCanvasMax) {
  const yRangeData = dataHighMax - dataLowMin;
  const canvasY = (yCanvasMax * (dataToMap - dataLowMin)) / yRangeData;
  const y = -canvasY; // to reverse data direction
  return Math.floor(y);
}

function drawCandle(
  canvas,
  candle,
  xPos,
  dataLowMin,
  dataHighMax,
  yCanvasMin,
  yCanvasMax,
) {
  const context = canvas.getContext('2d');

  const y1 = mapY(candle.L, dataLowMin, dataHighMax, yCanvasMin, yCanvasMax);
  const y2 = mapY(candle.H, dataLowMin, dataHighMax, yCanvasMin, yCanvasMax);
  const y3 = mapY(candle.O, dataLowMin, dataHighMax, yCanvasMin, yCanvasMax);
  const y4 = mapY(candle.C, dataLowMin, dataHighMax, yCanvasMin, yCanvasMax);
  // document.getElementById("demo").innerHTML =  "the result is: y1 y2 y3 y4: "
  // + y1 +", "+ y2 +", "+ y3+", "+ y4;

  // candle's shadow line
  context.strokeStyle = 'black'; // high low
  context.lineWidth = candleShadowWidth;
  context.beginPath();
  context.moveTo(xPos, y1);
  context.lineTo(xPos, y2);
  context.stroke();

  // candle's body line
  if (candle.O < candle.C) {
    context.strokeStyle = 'green'; // up
  } else {
    context.strokeStyle = 'red'; // down
  }
  context.lineWidth = candleBodyWidth;
  context.beginPath();
  context.moveTo(xPos, y3);
  context.lineTo(xPos, y4);
  context.stroke();
}
c.translate(0, e.height); // start at left bottom corner
const candle1 = new Candle(1, 10, 50, 90, 10, 70); // id,timeframe, O, H,L,C
const candle2 = new Candle(1, 10, 52, 80, 35, 36); // id,timeframe, O, H,L,C
const xPos = 75;
drawCandle(e, candle1, xPos, 10, 90, 0, e.height); // context, candle, dataMax, dataMin, canvasMin, canvasheight
drawCandle(e, candle2, 105, 10, 90, 0, e.height); // context, candle, dataMax, dataMin, canvasMin, canvasheight
