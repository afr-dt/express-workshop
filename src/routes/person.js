const express = require('express');
const router = express.Router();

// QueryString
// http://localhost:3000/person?name=alex
router.get('/person', (req, res) => {
  if (req.query.name) {
    res.send(`Hicicte un request a una persona ${req.query.name}`);
  } else {
    res.send('Hicicte un request a personas');
  }
});

// http://localhost:3000/person/alex
router.get('/person/:name', (req, res) => {
  res.send(`Hicicte un request a una persona ${req.params.name}`);
});

router.get('/error', (req, res) => {
  throw new Error('Error');
});

module.exports = router;
