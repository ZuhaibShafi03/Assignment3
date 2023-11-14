let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with cals model

let Cal = require('../models/cal');

/* Read Operation */
/* Get Route for the Cal list */

router.get('/', async (req, res, next) => {
    try {
        const callist = await Cal.find().exec();
        res.render('cal', {
            title: 'Cal List',
            Callist: callist
        });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the next middleware
    }
});


module.exports = router;
