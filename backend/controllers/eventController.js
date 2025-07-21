// controllers/eventController.js
const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { title, description, date, location, category, price, image, rating } = req.body;

  const newEvent = new Event({
    title,
    description,
    date,
    location,
    category,
    price,
    image,
    rating
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: 'Invalid event data' });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};