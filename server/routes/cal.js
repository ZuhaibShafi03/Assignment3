// Import necessary modules and packages
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect with the 'cal' model
let Cal = require('../models/cal');
let calController = require('../../controller/cal');
const cal = require('../models/cal');

/* CRUD Operations */

/* Read Operation */

// Get Route for the Cal list
router.get('/', calController.displayCalList);

/* Add Operation */

// Get Route for displaying the add page - Create Operation
router.get('/add', calController.displayAddPage);

// Post Route for processing the add page - Create Operation
router.post('/add', calController.processAddPage);

/* Edit Operation */

// Get Route for displaying the Edit Operation - Update Operation
router.get('/edit/:id', calController.displayEditPage);

// Post Route for processing the Edit Operation - Update Operation
router.post('/edit/:id', calController.processEditPage);

/* Delete Operation */

// Get to perform the Delete Operation -- deletion
router.get('/delete/:id', calController.preformDelete);

// Export the router for use in other parts of the application
module.exports = router;
