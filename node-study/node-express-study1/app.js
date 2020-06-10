const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');

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
    this.app.use(helmet());
    this.app.use(bodyParser());
    this.app.use(cookieParser());
    this.app.use((req, res, next) => {
      console.log('미들웨어');
      next();
    });
    return this;
  }
}

const createServer = (config = {}) => {
  const server = new AppServer();
  return server.start();
};

exports.createServer = createServer;
