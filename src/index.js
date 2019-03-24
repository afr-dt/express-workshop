const express = require('express');

const app = express();

const personRoute = require('./routes/person');

app.use(personRoute);
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`The server is running in http://localhost:3000/`)
);
