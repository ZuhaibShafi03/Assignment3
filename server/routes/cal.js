let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with cals model

let Cal = require('../models/cal');
let calController = require('../../controller/cal');
const cal = require('../models/cal');
/* CRUD Operation */
/* Read Operation */
/* Get Route for the Cal list */

router.get('/', calController.displayCalList);

/* Add Operation */
/* Get Route for the displaying add page - Create Operation */
router.get('/add', calController.displayAddPage);

/* Post Route for the processing add page - Create Operation */
router.post('/add', calController.processAddPage);

/* Edit Operation */
/* Get Route for displaying Edit Operation - Update Operation */
router.get('/edit/:id', calController.displayEditPage);

/* Post Route for displaying Edit Operation - Update Operation */
router.post('/edit/:id', calController.processEditPage);

/* Delete Operation */
/* Get to perform Delete Operation -- deletion */
router.get('/delete/:id', calController.preformDelete);

module.exports = router;
