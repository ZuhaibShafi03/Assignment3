// Import the Mongoose module
let mongoose = require('mongoose');

// Create a Mongoose Schema for the 'cals' collection
let calModel = mongoose.Schema({
    // Define the fields for the 'cals' collection
    FoodItem: String,   // FoodItem field of type String
    Calories: Number,   // Calories field of type Number
    Protein: Number,    // Protein field of type Number
    Carbs: Number,      // Carbs field of type Number
    Fat: Number         // Fat field of type Number
},
{
    // Specify the collection name in the MongoDB database
    collection: "cals"
});

// Export the Mongoose model for the 'Cal' collection
module.exports = mongoose.model('Cal', calModel);
