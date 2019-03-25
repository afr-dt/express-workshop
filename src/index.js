const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const personRoute = require('./routes/person');
const customerRoute = require('./routes/customer');
const app = express();

app.use(bodyParser.json());
app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

// Handler 404 not found
app.use((req, res, next) => {
  res.status(404).send('404 not found');
});
// Handler Error 500
app.use((err, req, res, next) => {
  // console.error(err.stack);
  res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`The server is running in http://localhost:3000/`)
);
