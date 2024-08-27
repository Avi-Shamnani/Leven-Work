const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientModel = require('../../../server/models/client.model.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Route to handle form submission from Contact.js
app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, business = '', services = '', location = '', description = '' } = req.body;
    const client = new clientModel({ name, email, phone, business, services, location, description });
    await client.save();
    res.status(201).send({ message: 'Client data saved successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to save client data' });
  }
});

mongoose.connect('mongodb://localhost:27017/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  business: { type: String, default: '' },
  services: { type: String, default: '' },
  location: { type: String, default: '' },
  description: { type: String, default: '' },
});

const User = mongoose.model('User', userSchema);

app.post('/api/saveUser', async (req, res) => {
  const { name, email, phone, business = '', services = '', location = '', description = '' } = req.body;

  try {
    const newUser = new User({ name, email, phone, business, services, location, description });
    await newUser.save();
    res.status(200).send('User saved successfully');
  } catch (error) {
    res.status(500).send('Error saving user:', error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
