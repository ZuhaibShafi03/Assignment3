let express = require('express');
let router = express.Router();
let indexController = require('../../controller/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET About page. */
router.get('/about', indexController.displayAboutPage);
/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET Contact page. */
router.get('/contact', indexController.displayContactmePage);

//this code means that make this whole file public
module.exports = router;
