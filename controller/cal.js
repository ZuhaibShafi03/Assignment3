let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose --save
// Connect with the "cal" model
let Cal = require('../server/models/cal');
const CalModel = require('../server/models/cal');
/* CRUD Operation*/

// Display the list of cals
module.exports.displayCalList = async (req, res, next) => {
    try {
        const query = CalModel.find().maxTimeMS(30000);  // Adjust as needed
        const result = await query.exec();
        res.json(result);
        const callist = await Cal.find().exec();
        res.render('cal/cal', {
            title: 'Cal List',
            Callist: callist
        });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the next middleware
    }
}

// Display the add page
module.exports.displayAddPage = async (req, res, next) => {
    res.render('cal/add', { title: 'Add Cal' });
}

// Process the add page
module.exports.processAddPage = async (req, res, next) => {
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
}

// Display the edit page
module.exports.displayEditPage = async (req, res, next) => {
    try {
        let id = req.params.id;
        let calToEdit = await Cal.findById(id);
        res.render('cal/edit', { title: 'Edit Cal', cal: calToEdit });
    } catch (err) {
        console.log(err);
        res.end(err);
    }
}

// Process the edit page
module.exports.processEditPage = async (req, res, next) => {
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
}

// Perform delete operation
module.exports.preformDelete = async (req, res, next) => {
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
}
