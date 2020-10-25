const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
  autoescape: true,
  express: app,
});

// 미들웨어 세팅
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/nodestudy', (req, res) => {
  res.send('nodestudy get');
});

app.use('/admin', admin);

app.listen(port, () => {
  console.log('Express listening on port 3000');
});
