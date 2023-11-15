// Import the express module
var express = require('express');

// Create a new Express Router
var router = express.Router();

/* Routing for Users */

/* GET Users Listing */
// Define a GET route for the base path ('/')
router.get('/', function(req, res, next) {
  // Respond with the text 'respond with a resource'
  res.send('respond with a resource');
});

// Export the router, making it available for use in other parts of the application
module.exports = router;
