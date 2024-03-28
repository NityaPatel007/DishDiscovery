// comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  "recipeId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  "comments": {
    type: String
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
