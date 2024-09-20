const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  type: String,
  description: String,
  date: Date,
  location: String,
  image: String,
  audio: String,
  video: String,
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;
