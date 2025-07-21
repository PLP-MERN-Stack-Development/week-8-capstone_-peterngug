// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/events', eventController.getEvents); // getEvents must be a function
router.post('/events', eventController.createEvent);

module.exports = router;