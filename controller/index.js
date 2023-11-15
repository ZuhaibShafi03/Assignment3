let express = require('express');
let router = express.Router();


module.exports.displayHomePage = (req,res,next) => {
    res.render('index', { title: 'Home Page' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About Me' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects' });
}

module.exports.displayContactmePage = (req, res, next) => {
    res.render('index', { title: 'Contact Me' });
}