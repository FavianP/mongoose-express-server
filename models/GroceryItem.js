const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true,'item requires a string value']
    },
    food_group: {type: String, required:[true,'item requires a string value']}

});

module.exports = mongoose.model('GroceryItem', grocerySchema);