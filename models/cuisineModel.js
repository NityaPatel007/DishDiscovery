const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
     "cuisine": String
});

const Cuisine = mongoose.model('Cuisine', cuisineSchema);

module.exports = Cuisine;