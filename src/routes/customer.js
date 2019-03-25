const express = require('express');
const router = express.Router();
const CustomerModel = require('../models/customer.model');

// Create a new customer
router.post('/customer', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request body is missing');
  }

  const model = new CustomerModel(req.body);
  model.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }
      res.status(201).send(doc)
    })
    .catch(err => res.status(500).json(err))
});

router.get('/customer', (req, res) => {
  if (!req.query.id) {
    return res.status(400).send('Bad url parameter: id')
  }
  CustomerModel.findOne({
      id: req.query._id
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).send(err))
})

router.put('/customer', (req, res) => {
  if (!req.query.id) {
    return res.status(400).send('Bad url parameter: id')
  }
  CustomerModel.findOneAndUpdate({
      id: req.query._id
    }, req.body, {
      new: true
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).send(err))
})

router.delete('/customer', (req, res) => {
  if (!req.query.id) {
    return res.status(400).send('Bad url parameter: id')
  }
  CustomerModel.findOneAndRemove({
      id: req.query._id
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).send(err))
})

module.exports = router