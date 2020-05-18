import axios from 'axios';

const api = axios.create({
  host: 'http://openapi.seoul.go.kr:8088/',
});

export const fineDustApi = {
  get: () =>
    api.get(
      'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99',
    ),
};
