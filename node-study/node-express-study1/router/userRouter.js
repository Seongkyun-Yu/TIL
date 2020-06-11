const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('user');
});

module.exports = router;
