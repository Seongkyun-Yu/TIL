const express = require('express');
const cookieParaser = require('cookie-parser');
const helmet = require('helmet');
const http = require('http');

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;
    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stopping = false;
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParaser());
  }
}

const init = async (config = {}) => {
  const server = new ApiServer(config);
  return server.start;
};
