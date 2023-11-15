// Import necessary modules and packages
let express = require('express');
let router = express.Router();
let indexController = require('../../controller/index');

/* Routing for Basic Pages */

/* Home Page */
// GET route for the home page
router.get('/', indexController.displayHomePage);

/* About Page */
// GET route for the about page
router.get('/about', indexController.displayAboutPage);

/* Projects Page */
// GET route for the projects page
router.get('/projects', indexController.displayProjectsPage);

/* Contact Page */
// GET route for the contact page
router.get('/contact', indexController.displayContactmePage);

// This code exports the router, making it available for use in other parts of the application
module.exports = router;
