const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    "title": {
        type: String
    },
    "description": {
        type: String
    },
    "ingredients": {
        type: String
    },
    "instructions": {
        type: String
    },
    "image": {
        type: String
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
