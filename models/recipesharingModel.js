const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    "title": {
        type: String
    },
    "description": {
        type: String
    },
    "cuisine": {
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

const RecipeShare = mongoose.model('RecipeShare', recipeSchema);

module.exports = RecipeShare;
