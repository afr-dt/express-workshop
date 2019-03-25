const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/express-api', { useNewUrlParser: true });

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true
  }
});

module.exports = mongoose.model('customers', CustomerSchema);
