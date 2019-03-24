const express = require('express');
const router = express.Router();

router.get('/person', (req, res) => {
  res.send('Hicicte un request a persona');
});

module.exports = router;
