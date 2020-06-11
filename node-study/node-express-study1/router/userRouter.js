const express = require('express');

const router = express.Router();
const db = require('../model/db');

router.get('/', async (req, res) => {
  res.render('user');
});

router.post('/create', async (req, res) => {
  const { user_name, user_phone } = req.body;
  await db.users.create({
    user_name,
    user_phone,
  });
  res.send({ status: 200, message: 'success' });
});

module.exports = router;
