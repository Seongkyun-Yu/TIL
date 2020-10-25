const express = require('express');

const router = express.Router();

const testMiddleware = (req, res, next) => {
  console.log('첫번째 미들웨어');
  next();
};

const testMiddleware2 = (req, res, next) => {
  console.log('두번째 미들웨어');
  next();
};

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
  res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
  // res.send('admin products');
  res.render('admin/products.html', {
    message: 'hello',
    online: 'express',
  });
});

router.get('/products/write', (req, res) => {
  res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
  res.send(req.body.price);
});

router.post('/products/write');

module.exports = router;
