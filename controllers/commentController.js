// commentController.js

const Comment = require('../models/commentModel');

const addComment = async (req, res) => {
  try {
    const { recipeId, comment } = req.body;
    const newComment = await Comment.create({ recipeId: recipeId, text: comment }); // Assuming the text field in your Comment model represents the comment itself
    res.status(201).json({ message: 'Comment added successfully', data: newComment });
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