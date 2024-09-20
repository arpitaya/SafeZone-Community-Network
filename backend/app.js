const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const incidentRoutes = require('./routes/incidentRoutes');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/public')));

// app.use(appConfig);
app.use(bodyParser.json()); 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/safezone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.use('/api/incidents', incidentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
