'use strict';

const express = require('express');

const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/api/nights', function(req, res){
  return res.status(200).send( {
    name: "arabian",
    item: 
    {
      location: "arabia",
      temperature: "warm, balmy",
      era: "medieval",
      number: 1001
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
