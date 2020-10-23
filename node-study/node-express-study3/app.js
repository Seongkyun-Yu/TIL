const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/nodestudy', (req, res) => {
  res.send('nodestudy get');
});

app.listen(port, () => {
  console.log('Express listening on port 3000');
});
