let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with cals model

let Cal = require('../models/cal');
/* CRUD Operation */
/* Read Operation */
/* Get Route for the Cal list */

router.get('/', async (req, res, next) => {
    try {
        const callist = await Cal.find().exec();
        res.render('cal/cal', {
            title: 'Cal List',
            Callist: callist
        });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the next middleware
    }
});

/* Add Operation */
/* Get Route for the displaying add page - Create Operation */
router.get('/add', async (req, res, next) => {
    res.render('cal/add',{title:'Add Cal'})
});

/* Post Route for the processing add page - Create Operation */
router.post('/add', async (req, res, next) => {
    try {
        let newCal = new Cal({
            "FoodItem": req.body.FoodItem,
            "Calories": req.body.Calories,
            "Protein": req.body.Protein,
            "Carbs": req.body.Carbs,
            "Fat": req.body.Fat
        });

        await Cal.create(newCal);  
        res.redirect('/cal-list');
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

/* Edit Operation */
/* Get Route for displaying Edit Operation - Update Operation */
router.get('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let calToEdit = await Cal.findById(id);
        res.render('cal/edit', { title: 'Edit Cal', cal: calToEdit });
    } catch (err) {
        console.log(err);
        res.end(err);
    }
});

/* Post Route for displaying Edit Operation - Update Operation */
router.post('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let updateCal = {
            "FoodItem": req.body.FoodItem,
            "Calories": req.body.Calories,
            "Protein": req.body.Protein,
            "Carbs": req.body.Carbs,
            "Fat": req.body.Fat
        };
        await Cal.updateOne({ _id: id }, updateCal);
        res.redirect('/cal-list');
    } catch (err) {
        console.log(err);
        res.end(err);
    }
});

/* Delete Operation */
/* Get to perform Delete Operation -- deletion */
router.get('/delete/:id', async (req, res, next) => {
    let id = req.params.id.trim();
    Cal.deleteOne({ _id: id })
    .then(result => {
        // Handle the result of the delete operation
        console.log(result);
        res.redirect('/cal-list');
    })
    .catch(err => {
        // Handle the error
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});


module.exports = router;
