// commentController.js

const Comment = require('../models/commentModel');

const addComment = async (req, res) => {
  try {
    const { recipeId, comment } = req.body;
    const comments = await Comment.create({ recipeId: recipeId, comment: comment });
    
    res.status(201).json({ message: 'Comment added successfully', data: comments });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCommentsByRecipeId = async (req, res) => {
  try {
    const { recipeId, comment } = req.body;
    const comments = await Comment.find({ recipeId: recipeId, comment: comment});
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
    addComment, getCommentsByRecipeId
};