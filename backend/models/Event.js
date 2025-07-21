// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }, // URL of the image
  attendees: { type: Number, default: 0 },
  rating: { type: Number, min: 0, max: 5 }, // Rating between 0 and 5
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);