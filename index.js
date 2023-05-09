const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use('/', require('./routes/index'));

app.listen(PORT, function (err) {
  if (err) {
    console.log(`Error in starting the server: ${err}`);
  }
  console.log(`Server in running on the Port: ${PORT}`);
});
