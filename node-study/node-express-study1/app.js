/* eslint-disable class-methods-use-this */
const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const WebSocket = require('ws');

const mainRouter = require('./router/mainRouter');
const userRouter = require('./router/userRouter');

const db = require('./model/db');

class AppServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.conifg = config;
    this.app = app;

    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stop = false;
  }

  start() {
    this.set();
    this.middleWare();
    this.router();
    this.dbConnection();

    this.app.use('/public', express.static(__dirname + '/public'));

    return this;
  }

  set() {
    this.app.engine('html', require('ejs').renderFile);
    this.app.set('views', __dirname + '/views');
    this.app.set('view engine', 'html');
  }

  middleWare() {
    this.app.use(helmet());
    this.app.use(bodyParser());
    this.app.use(cookieParser());
    this.app.use((req, res, next) => {
      console.log('미들웨어');
      next();
    });
  }

  router() {
    this.app.use('/', mainRouter);
    this.app.use('/user', userRouter);

    this.app.use((req, res, next) => {
      res.status(404);
      res.send('잘못된 요청입니다');
    });
  }

  dbConnection() {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('DB접속 완료');
        return db.sequelize.sync({ force: false });
      })
      .then(() => {
        console.log('디비 접속 완료 후 다음 할 일');
      })
      .catch((err) => {
        console.log('DB접속이 실패됐을 경우');
        console.log(err);
      });
  }
}

const createServer = (config = {}) => {
  const server = new AppServer();
  return server.start();
};

const connectUpbit = () => {
  const ws = new WebSocket('wss://api.upbit.com/websocket/v1');

  ws.on('open', () => {
    console.log('연결됨');

    ws.send(
      JSON.stringify([
        { ticket: 'test' },
        { type: 'ticker', codes: ['KRW-BTC'] },
      ]),
    );
  });

  ws.on('message', (data) => {
    console.log(data.toString('utf-8'));
  });
};

exports.createServer = createServer;
exports.connectUpbit = connectUpbit;
