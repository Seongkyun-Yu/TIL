require('dotenv').config();

/*  DEPENDENCIES */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*******************************
  Endpoint
*******************************/

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
