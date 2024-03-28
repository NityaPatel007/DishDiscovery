// comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  "recipeId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  "comment": {
    type: String,
    required: true
  },
  "createdBy": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
