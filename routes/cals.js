let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with cals model

let Cals = require('../models/cals');

/* Read Operation */
/* Get Route for the Cal list */

/*router.get('/CalsList',(req,res,next)=>{
    Cals.find((err, CalsList)=>{
        if(err)
        {
            return console.error(err);
        }
            else
        {
            res.render('CalsList',{
            title:'CalsList',
            CalsList: CalsList
        })
        }
    });
});*/
router.get('/cals', (req, res, next) => {
    Cals.find((err, CalsList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('CalsList', {
                title: 'CalsList',
                CalsList: CalsList  // Make sure you pass CalsList here
            });
        }
    });
});
module.exports = router;
