import axios from "axios";

const api = axios.create({
  baseURL: "https://api.upbit.com/v1/",
});

export const upbitApi = {
  getCoinCandles: (market, timeType, time, count) => {
    return api.get(
      `candles/${timeType}/${time}?market=${market}&count=${count}`
    );
  },
};
