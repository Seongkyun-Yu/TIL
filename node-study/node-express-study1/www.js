'use strict';

const { createServer, connectUpbit } = require('./app.js');
/* 
    서버의 포트
    ssl == https 443
    아마존 키값
    PG 상점 키값
*/
const option = {
  port: 80,
};

const www = async (config = {}) => {
  const server = await createServer(config);
  const { port } = config;
  server.listen(port, () => {
    console.log(`서버 돌아갑니다:::${port}`);
  });

  // connectUpbit();
};

www(option);
