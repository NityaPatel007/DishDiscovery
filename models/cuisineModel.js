const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
     "cuisine": String,
     "createdBy": {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
});

const Cuisine = mongoose.model('Cuisine', cuisineSchema);

module.exports = Cuisine;