const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const mainRouter = require('./router/mainRouter');
const userRouter = require('./router/userRouter');

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
}

const createServer = (config = {}) => {
  const server = new AppServer();
  return server.start();
};

exports.createServer = createServer;
