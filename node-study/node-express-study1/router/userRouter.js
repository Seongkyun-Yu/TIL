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

router.get('/list', async (req, res) => {
  const result = await db.usesrs.findAll();
  const resultDetail = await db.users.findOne({ where: { id: 1 } }); // 찾는 조건 작성
  const resultQury = await db.sequelize.query('select * from users');
  res.send({
    status: 200,
    data: {
      result,
      resultDetail,
    },
  });
});

router.put('/update', async (req, res) => {
  // 객체가 두개 들어감
  await db.users.update(
    {
      user_name: 'gunheekim',
    },
    {
      where: { id: 1 },
    },
  );
});

module.exports = router;
