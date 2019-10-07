'use strict';

const express = require('express');
const multer = require('multer');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

// Controllers
const sessionController = require('../src/controllers/SessionController');
const spotController = require('../src/controllers/SpotController');
const dashboardController = require('../src/controllers/DashboardController');
const bookingController = require('../src/controllers/BookingController');

// Routes
routes.post('/sessions', sessionController.store);
routes.post('/spots', upload.single('thumbnail'), spotController.store);
routes.get('/spots', spotController.index);
routes.get('/dashboard', dashboardController.show);
routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;