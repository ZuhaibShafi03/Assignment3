#!/usr/bin/env node

/**
 * Module dependencies.
 */

// Import the Express app from the specified configuration file.
var app = require('./server/config/app');

// Import the 'debug' module for debugging purposes.
var debug = require('debug')('classproject:server');

// Import the 'http' module for creating an HTTP server.
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

// Normalize the port value and set it in the Express app.
var port = normalizePort(process.env.PORT || '7000');
app.set('port', port);

/**
 * Create HTTP server.
 */

// Create an HTTP server using the Express app.
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

// Start the server and set up event listeners for errors and listening.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

// Function to normalize the port value.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

// Function to handle errors that may occur when starting the server.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // Handle specific listen errors with friendly messages.
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

// Function to handle the event when the server is listening.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
