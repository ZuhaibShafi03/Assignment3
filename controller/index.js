let express = require('express');
let router = express.Router();

// Display the Home Page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home Page' });
}

// Display the About Me Page
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About Me' });
}

// Display the Projects Page
module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects' });
}

// Display the Contact Me Page
module.exports.displayContactmePage = (req, res, next) => {
    res.render('index', { title: 'Contact Me' });
}