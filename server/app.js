const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientModel = require('./models/client.model.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
    console.log(req.body);
  try {
    const { name, email, phone, business, services, location, description } = req.body;
    const client = new clientModel({ name, email, phone, business, services, location, description });
    await client.save();
    res.status(201).send({ message: 'Client data saved successfully!' });
  } catch (error) {
    console.error("Failed to save client data:", error);
    res.status(500).send({ error: 'Failed to save client data' });
  }
});

mongoose.connect('mongodb://127.0.0.1:27017/levenwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
