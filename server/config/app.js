// Import required modules
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Import MongoDB configuration
let mongoose = require('mongoose');
let DB = require('./db');

// Connect to MongoDB using the provided URI
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection;

// MongoDB connection event handling
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import route handlers
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let calsRouter = require('../routes/cal');

// Create an Express application
let app = express();

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static file serving setup
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// Define route handlers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cal-list', calsRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, providing error details in development mode
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export the configured Express application
module.exports = app;
