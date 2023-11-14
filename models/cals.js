let mongoose = require('mongoose');
//create a cals model
let calsModel = mongoose.Schema({
    FoodItem: String,
    Calories: Number,
    Protein: Number,
    Carbs: Number,
    Fat: Number

},
{
    collection: "cals"
}
)
module.exports = mongoose.model('Cals', calsModel);