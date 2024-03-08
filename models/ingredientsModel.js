const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    "category": String,
    "ingredients": String
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;