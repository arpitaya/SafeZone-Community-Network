const express = require('express');
const router = express.Router();
const Incident = require('../models/incident');

router.post('/submit', async (req, res) => {
  try {
    const {
      type,
      description,
      date,
      location,
      image,
      audio,
      video,
    } = req.body;

    const newIncident = new Incident({
      type,
      description,
      date,
      location,
      image,
      audio,
      video,
    });

    await newIncident.save();

    res.status(201).json({ message: 'Incident report submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
