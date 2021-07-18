const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000 || process.env.PORT;
const db = require('./db');
const controller = require('./controller');

const logRequests = (req, res, next) => {
  console.log(`Received a ${req.method} request from ${req.path}`);
  next();
}

app.use(logRequests);
app.use(express.static('client/dist'));
app.use(express.json());

app.get('/movieList', controller.getFromModel);
app.post('/movieList', controller.postToModel);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})