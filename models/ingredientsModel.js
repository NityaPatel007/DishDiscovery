const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
     "ingredient": String,
     "createdBy": {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;