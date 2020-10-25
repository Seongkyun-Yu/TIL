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

// 예외처리 미들웨어
app.use((req, res, _) => {
  res.status(400).render('common/404.html');
});

app.use((req, res, _) => {
  res.status(500).render('common/500.html');
});

app.use((req, res, next) => {
  app.locals.isLogin = false;
  next();
});

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
