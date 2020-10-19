const express = require('express');
const cookieParaser = require('cookie-parser');
const helmet = require('helmet');
const http = require('http');
const path = require('path');
const serveStatic = require('serve-static');

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;
    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stopping = false;
    this.app.static = serveStatic;
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParaser());

    this.app.use(
      this.app.static(path.join(__dirname, 'dist'), {
        setHeader: (res, path) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeaders('Access-Control-Allow-Headers', '*');
          res.setHeaders('Access-Control-Allow-Methods', 'GET');
        },
      }),
    );
  }
}

const init = async (config = {}) => {
  const server = new ApiServer(config);
  return server.start;
};
