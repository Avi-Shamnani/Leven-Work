const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  business: { type: String, required: true },
  services: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
