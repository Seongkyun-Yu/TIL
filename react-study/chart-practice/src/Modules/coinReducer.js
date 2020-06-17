import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { put, call, takeEvery } from 'redux-saga/effects';
import { upbitApi } from '../Api/upbitApi';
import { timestampToDatetime } from '../Utills/utill';

const SUCCESS = 'coin/SUCCESS';
const ADD = 'coin/ADD';
const ERROR = 'coin/ERROR';
const INIT = 'coin/INIT';
const INIT_SUCCESS = 'coin/INIT_SUCCESS';
const CONNECT = 'coin/CONNECT';

const initCandle = (coinList, timeType) => ({ type: INIT, coinList, timeType });
const initSuccess = (initData) => ({ type: INIT_SUCCESS, initData });
const connect = (coinList) => ({ type: CONNECT, coinList });
const success = (newData) => ({ type: SUCCESS, newData });
const error = (e) => ({ type: ERROR, e });

const connectSocketThunk = () => (dispatch, state) => {
  const client = new W3CWebSocket('wss://api.upbit.com/websocket/v1');
  client.binaryType = 'arraybuffer';

  client.onopen = () => {
    console.log('WebSocket Client Connected');
    client.send(
      JSON.stringify([
        { ticket: 'CoCost' },
        { type: 'ticker', codes: ['KRW-BTC'] },
      ]),
    );
  };

  client.onmessage = (evt) => {
    const coinState = state().Coin;
    const enc = new TextDecoder('utf-8');
    const arr = new Uint8Array(evt.data);

    const candle = JSON.parse(enc.decode(arr));

    const coinMarket = candle.code;
    const lastCandle =
      coinState[coinMarket].candles[coinState[coinMarket].candles.length - 1];

    // if (lastCandle.closePrice === candle.trade_price) return;

    const datetime = timestampToDatetime('minutes', 1, candle.trade_timestamp);
    const openPrice = lastCandle.openPrice;
    const highPrice =
      candle.trade_price > lastCandle.highPrice
        ? candle.trade_price
        : lastCandle.highPrice;
    const lowPrice =
      candle.trade_price < lastCandle.lowPrice
        ? candle.trade_price
        : lastCandle.lowPrice;
    const closePrice = candle.trade_price;

    const check = coinState[coinMarket].candles.find((candle) => {
      return candle.datetime === datetime;
    });

    let newData;
    if (check) {
      const accTradeVolume = check.accTradeVolume + candle.trade_volume;
      const newCandle = [...coinState[coinMarket].candles];
      newCandle.pop();
      newCandle.push({
        datetime,
        openPrice,
        highPrice,
        lowPrice,
        closePrice,
        accTradeVolume,
      });
      newData = {
        market: coinMarket,
        candles: newCandle,
        prevClosingPrice: candle.prev_closing_price,
        changePrice: candle.change_price,
        changeRate: candle.change_rate,
        accTradePrice24h: candle.acc_trade_price_24h,
        accTradeVolume24h: candle.acc_trade_volume_24h,
      };
    } else {
      const accTradeVolume = candle.trade_volume;
      newData = {
        market: coinMarket,
        candles: [
          ...coinState[coinMarket].candles,
          {
            datetime,
            openPrice: closePrice,
            highPrice: closePrice,
            lowPrice: closePrice,
            closePrice: closePrice,
            accTradeVolume: accTradeVolume,
          },
        ],
        prevClosingPrice: candle.prev_closing_price,
        changePrice: candle.change_price,
        changeRate: candle.change_rate,
        accTradePrice24h: candle.acc_trade_price_24h,
        accTradeVolume24h: candle.acc_trade_volume_24h,
      };
      newData.candles.shift();
    }

    dispatch(success(newData));
  };
};

function* initCandleSaga(action) {
  const coinList = action.coinList;
  const initData = {};

  for (let i = 0; i < coinList.length; i++) {
    let { data } = yield call(
      upbitApi.getCoinCandles,
      coinList[i],
      'minutes',
      1,
      100,
    );

    data.sort((data1, data2) => data1.timestamp - data2.timestamp);

    let newCandles = data.map((candle) => ({
      datetime: timestampToDatetime('minutes', 1, candle.timestamp),
      openPrice: candle.opening_price,
      highPrice: candle.high_price,
      lowPrice: candle.low_price,
      closePrice: candle.trade_price,
      // accTradePrice: candle.candle_acc_trade_price,
      accTradeVolume: candle.candle_acc_trade_volume,
    }));

    initData[coinList[i]] = {
      candles: newCandles,
      prevClosing: 0,
      changePrice: 0,
      changeRate: 0,
      accTradePrice24h: 0,
      accTradeVolume24h: 0,
    };
  }

  yield put(initSuccess(initData));
  yield put(connectSocketThunk());
}

function* coinSaga() {
  yield takeEvery(INIT, initCandleSaga);
}

const initialState = {
  selectedCoin: 'KRW-BTC',
  'KRW-BTC': {
    candles: [
      {
        datetime: new Date(1538778600000),
        openPrice: 10000000,
        highPrice: 11000000,
        lowPrice: 9000000,
        closePrice: 10500000,
        // accTradePrice: 1111111,
        accTradeVolume: 1.5,
      },
    ],
    prevClosingPrice: 0,
    changePrice: 0,
    changeRate: 0,
    accTradePrice24h: 0,
    accTradeVolume24h: 0,
  },
  'KRW-ETH': {
    candles: [
      {
        datetime: new Date(1538778600000),
        openPrice: 10000000,
        highPrice: 11000000,
        lowPrice: 9000000,
        closePrice: 10500000,
        // accTradePrice: 1111111,
        accTradeVolume: 1.5,
      },
    ],
    prevClosingPrice: 0,
    changePrice: 0,
    changeRate: 0,
    accTradePrice24h: 0,
    accTradeVolume24h: 0,
  },
};

export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        ...action.initData,
      };
    case SUCCESS:
      return {
        ...state,
        [action.newData.market]: {
          ...action[action.newData.market],
          candles: action.newData.candles,
          prevClosing: action.newData.prevClosing,
          changePrice: action.newData.changePrice,
          changeRate: action.newData.changeRate,
          accTradePrice: action.newData.accTradePrice,
          accTradeVolume: action.newData.accTradeVolume,
        },
      };
    // return {
    //   ...state,
    //   [action.newData.market]: {
    //     ...action[action.newData.market],
    //     candles: [
    //       ...action[action.newData.market].candles,
    //       action.newData.candles,
    //     ],
    //   },
    //   prevClosing: action.newData.prevClosing,
    //   changePrice: action.newData.changePrice,
    //   changeRate: action.newData.changeRate,
    //   accTradePrice: action.newData.accTradePrice,
    //   accTradeVolume: action.newData.accTradeVolume,
    // };
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.e,
      };

    default:
      return state;
  }
};

export { coinSaga, initCandle };
